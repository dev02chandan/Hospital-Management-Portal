import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";
import Dashboard from "./components/Dashboard";

const App = ({ user_name }) => {
  const AdminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });

  const [error, setError] = useState("");

  // const [name, setName] = useState("");

  const Login = (details) => {
    // console.log(details);
    if (
      details.password === AdminUser.password &&
      details.email === AdminUser.email
    ) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div className="App">
      {user.email !== "" ? (
        <Dashboard Logout={Logout} user={user} />
      ) : (
        <LoginForm Login={Login} error={error} user_name={user_name} />
      )}
    </div>
  );
};

export default App;
