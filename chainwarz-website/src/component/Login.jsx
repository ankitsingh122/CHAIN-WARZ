import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Store/Slice/UserSlice";
import { login2 } from "../Store/Slice/Player2";
import PropTypes from "prop-types";

function Login({ player, closeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      password: password,
      loggedIn: true,
    };

    if (player === 1) {
      dispatch(login(formData));
    } else if (player === 2) {
      dispatch(login2(formData));
    }
    closeModal(); 
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="mt-2">Login Here</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mt-2">
          <input
            className="rounded-md text-center"
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className="rounded-md text-center"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className="rounded-md text-center"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  player: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Login;



