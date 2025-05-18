import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-black bg-opacity-80">
      <div
        className="bg-[url('/public/assets/web.jpg)] bg-cover bg-center w-full h-full absolute top-0 left-0 -z-10 "
        aria-hidden="true"
      ></div>
      {/* ওয়েবসাইট লোগো: তুমি তোমার logo path এ দিতে পারো */}
      <img
        src="/assets/logo.png"
        alt="Website Logo"
        className="w-32 h-32 object-contain mb-4"
      />
      <p className="text-white text-lg font-semibold animate-pulse">Loading...</p>
    </div>
  );
};

export default Preloader;
