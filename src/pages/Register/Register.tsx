import { SyntheticEvent, useState } from "react";
import "./Register.css";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios
      .post("/register", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirm: confirmPassword,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="form-register m-auto">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        {/* First Name */}
        <div className="form-floating">
          <input
            className="form-control"
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label>First Name</label>
        </div>

        {/* Last Name */}
        <div className="form-floating mt-2">
          <input
            className="form-control"
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label>Last Name</label>
        </div>

        {/* Email */}
        <div className="form-floating mt-2">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Email address</label>
        </div>

        {/* Password */}
        <div className="form-floating mt-2">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label>Password</label>
        </div>

        {/* Confirm Password */}
        <div className="form-floating mt-2">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <label>Confirm Password</label>
        </div>

        <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Register;
