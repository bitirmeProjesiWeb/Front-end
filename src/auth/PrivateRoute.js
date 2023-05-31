import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useData } from "../context/Context";

export default function PrivateRoute({ children, requiredRole }) {
  const { user } = useData();
  const location = useLocation();
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{
          return_url: location.pathname,
        }}
      />
    );
  }

  if (requiredRole === "admin") {
    if (user.role === "admin") {
      return children;
    } else {
      return (
        <Navigate
          to="/"
          replace={true}
          state={{
            return_url: location.pathname,
          }}
        />
      );
    }
  }

  if (requiredRole === "user") {
    if (user.role === "user" || user.role === "admin") {
      return children;
    } else {
      return (
        <Navigate
          to="/"
          replace={true}
          state={{
            return_url: location.pathname,
          }}
        />
      );
    }
  }

  return children;
}
