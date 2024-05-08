import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Store/Slice/UserSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [isLogin, setLogin] = useState(false);

  const Dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    Dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
    toggleLogin();


  };
  
  
  const toggleLogin = () => {
     setLogin(!isLogin);
   };


  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="mt-2">Login Here</h1>

        <div className="mt-2">
          <input
            className=" rounded-md text-center"
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className=" rounded-md text-center"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className=" rounded-md text-center"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>
      
    </>
  );
}

export default Login;
