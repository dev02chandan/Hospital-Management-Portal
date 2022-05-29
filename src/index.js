import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import WhichLogin from "./components/WhichLogin";
import View from "./components/View";
import Upload from "./components/Upload";
import SignUp from "./components/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhichLogin />} />
        <Route path="/doctor_login" element={<App user_name="Doctor" />} />
        <Route path="/patient_login" element={<App user_name="Patient" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hospital_login" element={<App user_name="Hospital" />} />
        <Route path="/view_file" element={<View />} />
        <Route path="/upload_file" element={<Upload />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </>
);
