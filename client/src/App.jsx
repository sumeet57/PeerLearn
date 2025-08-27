import { useState, useEffect } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { useLocation } from "react-router-dom";
import Landing from "./components/Landing.jsx";

const App = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div>
      <Layout />
    </div>
  );
};
export default App;
