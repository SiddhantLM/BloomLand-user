import axios from "axios";
import { blogEndpoints, eventEndpoints } from "../apis";
import { fetchUser } from "../../store/slices/userSlice";
import { toast } from "react-toastify";

export const sendRequest = ({ token, eventId }) => {
  return async (dispatch) => {
    try {
      console.log("eventId", eventId);
      await axios.post(
        `${eventEndpoints.SEND_REQUEST}`,
        { eventId: eventId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Request Sent!");
      dispatch(fetchUser({ token }));
    } catch (error) {
      toast.error(error.response ? error.response.message : error.message);
    }
  };
};

export const joinEvent = ({ token, eventId }) => {
  return async (dispatch) => {
    try {
      await axios.post(
        `${eventEndpoints.JOIN_EVENT}`,
        { eventId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Event Joined! Check Dashboard for Payment");
      dispatch(fetchUser({ token }));
    } catch (error) {
      toast.error(error.response ? error.response.message : error.message);
    }
  };
};

export const fetchBlogById = async ({ blogId }) => {
  try {
    const response = await axios.get(blogEndpoints.FETCH_ONE + "/" + blogId);

    return response.data.blog;
  } catch (error) {
    toast.error(error.response ? error.response.message : error.message);
  }
};
