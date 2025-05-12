import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { joinCommunity } from "../services/operations/community";

const Community = () => {
  const { token, isValid, detailsSubmitted } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const handleJoin = async () => {
    if (token) {
      if (isValid) {
        if (detailsSubmitted) {
          joinCommunity({ token: token });
        } else {
          navigate("/details");
        }
      } else {
        navigate("/auth/login");
      }
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <button
        onClick={handleJoin}
        className="bg-red-400 px-3 py-2 rounded-md text-white"
      >
        Join Community!
      </button>
    </div>
  );
};

export default Community;
