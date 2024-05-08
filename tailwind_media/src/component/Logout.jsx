import React from "react";
import { logout } from "../Store/Slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";

function Logout() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    
  };

  return (
    <>
      <div className="logout">
        <h1>
          Welcome <span>{userData.user?.name}</span>
        </h1>
        <button className="logout_button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      
    </>
  );
}

export default Logout;
