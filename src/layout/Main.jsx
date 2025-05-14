import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Navbar";

const Main = () => {
  return (
    <div className="bg-[url('./src/assets/web.jpg')] bg-cover bg-center h-screen text-[#EAD9C5]">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
