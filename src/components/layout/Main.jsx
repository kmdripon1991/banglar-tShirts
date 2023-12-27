import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </div>
  );
};

export default Main;
