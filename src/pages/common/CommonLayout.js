import React from "react";
import NavbarCom from "../../components/common/NavbarCom";
import FooterCom from "../../components/common/FooterCom";
import { Outlet } from "react-router-dom";
import Sidenav from "../../components/user/Sidenav";

export default function CommonLayout() {
  return (
    <div>
      <Sidenav>
        <NavbarCom />
        <Outlet />
        <FooterCom />
      </Sidenav>
    </div>
  );
}
