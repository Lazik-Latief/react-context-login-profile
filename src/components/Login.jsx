

import React, {useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });

  };

  return (
    <div className="profile-container">
       <h1 className="title">Profile</h1>
       <h2 className="sub-title">Login Here :</h2>

       <div className="login-box">
      <input type="text" placeholder="usermname"
      className="input-field" 
      onChange={(e) => setUsername(e.target.value)}
      />
      <input type="password" placeholder="password"  
      className="input-field"
      onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      className="login-btn"
      onClick={handleSubmit}>Login</button>
    </div>
    </div>
  );
}

export default Login;