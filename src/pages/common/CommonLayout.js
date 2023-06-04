import React from "react";
import UNavbarCom from "../../components/user/UNavbarCom";
import FooterCom from "../../components/common/FooterCom";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useData } from "../../context/Context";
import CNavbarCom from "../../components/common/CNavbarCom";

export default function CommonLayout() {
  const { user } = useData();

  return (
    <Box sx={{ margin: "20px" }}>
      {user ? <UNavbarCom /> : <CNavbarCom />}
      <Outlet />
      <FooterCom />
    </Box>
  );
}
