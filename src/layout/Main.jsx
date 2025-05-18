import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Navbar";
import Footer from "../Components/Footer";
import Preloader from "../Components/Shared/Preloader";


const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3 সেকেন্ডের জন্য preloader দেখাবে
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-[url('/assets/web.jpg')] bg-repeat bg-center text-[#EAD9C5] min-h-screen">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
