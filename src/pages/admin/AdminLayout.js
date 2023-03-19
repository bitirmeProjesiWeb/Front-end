import React, { useEffect, useState } from "react";
import NavbarCom from "../../components/admin/NavbarCom";
import FooterCom from "../../components/common/FooterCom";
import { Outlet } from "react-router-dom";
import ASidebar from "../../components/admin/ASidebar";
import { tokens } from "../../theme";
import {

  // Typography,
  useTheme
} from "@mui/material";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState({});

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    open
      ? setDrawer({
          width: "250px",
          transition: "0.27s",
         // backgroundColor: colors.grey[500]
        })
      : setDrawer({
          width: "60px",
          transition: "0.27s",
          overflowX: "hidden",
        // backgroundColor: colors.grey[500]
        });
  }, [open]);

  return (
    <div>
      <NavbarCom drawer={drawer} open={open} setOpen={setOpen} />
      <ASidebar drawer={drawer} open={open} setOpen={setOpen} >
        <Outlet />
        <FooterCom />
      </ASidebar>
    </div>
  );
}
