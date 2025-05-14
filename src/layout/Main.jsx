import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div className="bg-[url('./src/assets/web.jpg')] bg-cover bg-center h-screen text-[#EAD9C5]">
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
