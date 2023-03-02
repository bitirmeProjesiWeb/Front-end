import React from "react";
import { Navigate } from "react-router-dom";
import { useData } from "../context/Context";

export default function AdminRoute({ children }) {
  const { user } = useData();

  if (user?.role !== "admin") {
    return <Navigate to="/login" />;
  } else if (user.role === "admin") {
    return <Navigate to="/admin" />;
  }
  return children;
}
