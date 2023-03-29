import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography
        sx={{
          fontSize: "14rem",
          fontWeight: "1000",
          textShadow: " 12px 12px rgb(200,150,30)",
          letterSpacing: "20px",
        }}
      >
        404
      </Typography>
      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: 500,
          marginBottom: "3rem",
          fontFamily: " 'Courier New', monospace",
        }}
      >
        Sayfa Bulunamadı
      </Typography>
      <Button
        component={NavLink}
        to={"/"}
        variant="outlined"
        color="info"
        style={{
          fontSize: "1.5rem",
          borderRadius: "10px",
          fontWeight: "bolder",
        }}
      >
        Anasayfaya Dön
      </Button>
    </div>
  );
}
