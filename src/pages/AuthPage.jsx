import React from "react";
import Illustation from "../assets/illustration.png";
import Form from "../components/Form";
import { Routes, Route, Navigate } from "react-router";

const AuthPage = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="md:w-[50%] hidden md:flex max-h-screen">
        <img
          src={Illustation}
          alt="illustation"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" />} />
          <Route path="/login" element={<Form type="login" />} />
          <Route path="/signup" element={<Form type="signup" />} />
          <Route
            path="/forgot-password"
            element={<Form type="forgot-password" />}
          />
          <Route
            path="/reset-password"
            element={<Form type="reset-password" />}
          />
          <Route path="/otp" element={<Form type="otp" />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthPage;
