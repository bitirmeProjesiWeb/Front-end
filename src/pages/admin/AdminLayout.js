import React, { useEffect, useState } from "react";
import NavbarCom from "../../components/user/NavbarCom";
import FooterCom from "../../components/common/FooterCom";
import { Outlet } from "react-router-dom";
import Sidenav from "../../components/admin/Sidenav";

export default function AdminLayout() {
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
    <div>
      <NavbarCom drawer={drawer} open={open} setOpen={setOpen} />
      <Sidenav drawer={drawer} open={open} setOpen={setOpen}>
        <Outlet />
        <FooterCom />
      </Sidenav>
    </div>
  );
}
