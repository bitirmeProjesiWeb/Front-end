import React from "react";
import NavbarCom from "../../components/common/NavbarCom";
import FooterCom from "../../components/common/FooterCom"
import { Outlet } from "react-router-dom";

export default function CommonLayout() {
  return (
    <div>
      <NavbarCom />
      <Outlet />
      <FooterCom />
    </div>
  );
}
