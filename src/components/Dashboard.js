import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Dashboard({ Logout, user }) {
  return (
    <>
      {/* <div className="App"> */}
      <div className="welcome">
        <h2>
          Welcome, <span>{user.name}</span>
        </h2>

        {/* <div className="choice"> */}
        <div className="container">
          <div className="col">
            <Link to="/upload_file">
              <div id="wrapper">
                <div className="my-super-cool-btn">
                  <div className="dots-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <span
                    className="btn-name"
                    style={{ textAlign: "center", color: "#888" }}
                  >
                    Upload File
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/view_file">
              <div id="wrapper">
                <div className="my-super-cool-btn">
                  <div className="dots-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <span
                    className="btn-name"
                    style={{ textAlign: "center", color: "#888" }}
                  >
                    View My Files
                  </span>
                </div>
              </div>
            </Link>
          </div>
          {/* </div> */}
        </div>

        <div className="logout">
          <button onClick={Logout}>Logout</button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Dashboard;
