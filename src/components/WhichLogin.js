import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function WhichLogin() {
  return (
    <div className="WhichLogin">
      <h2>Welcome to XYZ</h2>
      <div className="container">
        <div className="col">
          <Link to="/patient_login">
            <div id="wrapper">
              <div className="my-super-cool-btn">
                <div className="dots-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <span className="btn-name" style={{ textAlign: "center" }}>
                  Patient Login
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/doctor_login">
            <div id="wrapper">
              <div className="my-super-cool-btn">
                <div className="dots-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <span className="btn-name" style={{ textAlign: "center" }}>
                  Doctor Login
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhichLogin;
