import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./views/firebase";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import "assets/css/nucleo-icons.css";
import "assets/css/style.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Home from "views/Home.js";
import LandingPage from "views/LandingPage.js";
import RegisterPage from "views/RegisterPage.js";
import ProfilePage from "views/ProfilePage.js";
import Static from 'views/Static'
import Dynamic from 'views/Dynamic'
import TextBased from 'views/TextBased'

function App() {
  return (
    <>
    <Routes>
      <Route path="/register-page" element={<RegisterPage/>} />
      <Route path="/home" element={<Home/>} />
      {/* <Route path="/text-based" element={<TextBased/>} /> */}
      <Route path="/static" element={<Static />} />
      {/* <Route path="/dynamic" element={<Dynamic />} /> */}
      <Route path="/landing-page" element={<LandingPage />} />
      
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/register-page" replace />} />
    </Routes>
    </>
  );
}

export default App;
