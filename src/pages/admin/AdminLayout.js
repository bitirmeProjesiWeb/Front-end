import React, { useEffect, useState } from "react";
import ANavbarCom from "../../components/admin/ANavbarCom";
import FooterCom from "../../components/common/FooterCom";
import { Outlet } from "react-router-dom";
import ASidebar from "../../components/admin/ASidebar";

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
      <ANavbarCom drawer={drawer} open={open} setOpen={setOpen} />
      <ASidebar drawer={drawer} open={open} setOpen={setOpen}>
        <Outlet />
        <FooterCom />
      </ASidebar>
    </div>
  );
}
