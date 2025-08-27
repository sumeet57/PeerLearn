import React from "react";
import { useLocation } from "react-router-dom";
import Aside from "../components/Aside";
import Home from "../pages/Home";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/home" ? (
        <>
          <div className="flex w-full h-screen bg-red-300">
            <div className="aside w-[25%]">
              <Aside />
            </div>
            <div className="main w-[70%]">
              <h1 className="text-3xl font-bold">Main</h1>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-screen bg-blue-300">
          <Home />
        </div>
      )}
    </>
  );
};

export default Layout;
