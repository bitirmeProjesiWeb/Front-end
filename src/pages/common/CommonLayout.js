import React, { useEffect, useState } from "react";
import UNavbarCom from "../../components/user/UNavbarCom";
import FooterCom from "../../components/common/FooterCom";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function CommonLayout() {
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState({});

  useEffect(() => {
    open
      ? setDrawer({
          width: "250px",
          transition: "0.27s",
        })
      : setDrawer({
          width: "60px",
          transition: "0.27s",
          overflowX: "hidden",
        });
  }, [open]);

  return (
    <Box sx={{ margin: "20px" }}>
      <UNavbarCom drawer={drawer} open={open} setOpen={setOpen} />
      <Outlet />
      <FooterCom />
    </Box>
  );
}
