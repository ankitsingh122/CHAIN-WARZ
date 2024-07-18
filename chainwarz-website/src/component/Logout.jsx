import React from "react";
import { logout } from "../Store/Slice/UserSlice";
import { useDispatch } from "react-redux";

function Logout() {
  const dispatch = useDispatch();
  

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    
  };

  return (
    <>
      <div className="logout">
       
        <button className="logout_button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      
    </>
  );
}

export default Logout;
