import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/slices/userSlice";
import PaymentCard from "../components/dashboard/PaymentCard";

const Dashboard = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { approved, events } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUser({ token }));
  }, [dispatch, token]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="mb-10 text-4xl text-black"> Approved Events</h1>
      <div className="container mx-auto justify-center flex flex-wrap">
        {approved &&
          approved.length > 0 &&
          approved.map((event) => <PaymentCard event={event} />)}
      </div>

      <h1 className="mb-10 text-4xl text-black"> Joined Events</h1>
      <div className="container mx-auto justify-center flex flex-wrap">
        {events &&
          events.length > 0 &&
          events.map((event) => <PaymentCard event={event} />)}
      </div>
    </div>
  );
};

export default Dashboard;
