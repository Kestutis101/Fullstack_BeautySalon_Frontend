// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/UI/molecules/Login/Login";
import Main from "./components/UI/organisms/Main/Main";
import Clients from "./components/UI/organisms/Clients/Clients";
import CreateClient from "./components/UI/organisms/CreateClient/CreateClient";
import HandleBadRequest from "./components/UI/atoms/HandleBadRequest/HandleBadRequest";
import Register from "./components/UI/molecules/Register/Register";
import Header from "./components/UI/atoms/Header/Header";
import Footer from "./components/UI/atoms/Footer/Footer";

export const DB_URL = "https://fullstack-beauty-salon-backend.vercel.app/";
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogged = () =>
    window.localStorage.getItem("jwtToken")
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);

  useEffect(() => {
    const jwtToken = window.localStorage.getItem("jwtToken");

    setIsLoggedIn(!!jwtToken);
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main handleLogged={handleLogged} />} />
        <Route path='/signUp' element={<Register />} />
        <Route path='/login' element={<Login handleLogged={handleLogged} />} />
        <Route
          path='/clients'
          element={isLoggedIn ? <Clients /> : <Navigate to='/' replace />}
        />
        <Route
          path='/createClient'
          element={isLoggedIn ? <CreateClient /> : <Navigate to='/' replace />}
        />
        <Route path='/*' element={<HandleBadRequest />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
