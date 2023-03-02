import React from "react";
import { Navigate } from "react-router-dom";
import { useData } from "../context/Context";

export default function PrivateRoute({ children }) {
  
  const {user} =  useData();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
