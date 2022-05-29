import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginForm({ Login, error, user_name }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    // console.log(details.password);
    // console.log(details.email);
    // setDetails({
    //   name: document.getElementById("name").value,
    //   email: document.getElementById("email").value,
    //   password: document.getElementById("password").value,
    // });

    axios({
      method: "get",
      url: "https://0b9d-103-177-112-54.in.ngrok.io/patient/login-verify/",
      headers: {},
      data: {
        MailID: document.getElementById("email").value,
        Password: document.getElementById("password").value,
      },
    })
      .then(function (response) {
        console.log(JSON.stringify(response));
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("password").value);
  };

  const isDoctor = (user_name) => {
    if (user_name === "Doctor") {
      return true;
    } else {
      return (
        <Link to="/Signup">
          <button className="button button-new">SIGNUP</button>
        </Link>
      );
    }
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-inner">
          <h2>{user_name} Login</h2>

          {error != "" ? <div className="error">{error}</div> : ""}

          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>

          <input type="submit" value="LOGIN" onClick={submitHandler} />

          {isDoctor(user_name)}

          {/* <Link to="/Signup">
            <button className="button button-new">SIGNUP</button>
          </Link> */}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
