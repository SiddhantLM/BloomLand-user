import axios from "axios";
import { paymentEndpoints } from "../apis";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

// Buy the Course
export async function PayEvent({ token, eventId, user_details }) {
  try {
    // Loading the script of Razorpay SDK
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.log("error while loading the script");
      return;
    }

    // Initiating the Order in Backend
    const orderResponse = await axios.post(
      paymentEndpoints.COURSE_PAYMENT_API,
      {
        eventId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!orderResponse.data.success) {
      throw new Error(orderResponse.data.message);
    }
    console.log(
      "PAYMENT RESPONSE FROM BACKEND............",
      orderResponse.data
    );

    // Opening the Razorpay SDK
    console.log("KEY ----------->", import.meta.env.VITE_RAZORPAY_KEY);
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      currency: orderResponse.data.data.currency,
      amount: `${orderResponse.data.data.amount}`,
      order_id: orderResponse.data.data.id,
      name: "BloomLand",
      description: "Thank you for Purchasing the Course.",
      //   image: rzpLogo,
      prefill: {
        name: `${user_details.name}`,
        email: user_details.email,
      },
      handler: function (response) {
        sendPaymentSuccessEmail(
          response,
          orderResponse.data.data.amount,
          token
        );
        verifyPayment({ ...response, eventId }, token);
      },
    };
    const paymentObject = new window.Razorpay(options);

    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      console.log(response.error);
    });
  } catch (error) {
    console.log("PAYMENT API ERROR............", error);
  }
}

async function verifyPayment(bodyData, token) {
  try {
    const response = await axios.post(
      paymentEndpoints.COURSE_VERIFY_API,
      bodyData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("VERIFY PAYMENT RESPONSE FROM BACKEND............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR............", error);
  }
}

// Send the Payment Success Email
async function sendPaymentSuccessEmail(response, amount, token) {
  try {
    await axios.post(
      paymentEndpoints.SEND_PAYMENT_SUCCESS_EMAIL_API,
      {
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log("PAYMENT SUCCESS EMAIL ERROR............", error);
  }
}
