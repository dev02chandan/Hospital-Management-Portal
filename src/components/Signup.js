import { useState } from "react";
import "../App.css";
import { Link } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const submitHandler = (e) => {
    axios({
      method: "post",
      url: "https://0b9d-103-177-112-54.in.ngrok.io/patient/sign-up",
      headers: {},
      data: {
        Name: details.name,
        Age: details.age,
        MailID: details.email,
        Password: details.password,
      },
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    // routeChange
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>SignUp</h2>

          {/* {error != "" ? <div className="error">{error}</div> : ""} */}

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
            <label htmlFor="Age">Age: </label>
            <input
              type="number"
              name="Age"
              id="Age"
              onChange={(e) => setDetails({ ...details, age: e.target.value })}
              value={details.age}
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
          {/* <Link to="/doctor_login"> */}
          <input type="submit" value="SIGNUP" />
          {/* <button className="button" onClick={routeChange}>
            SIGNUP
          </button> */}
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
