import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)  return <div>Please log in to view your profile.</div>;

  return (
     <div className="profile-card">
       <h2 className="profile-title">Profile</h2>
      
      <p className="profile-text">
      <span className="profile-label">Username:</span> {user.username}
    </p>

    <p className="profile-text">
      <span className="profile-label">Password:</span> {user.password}
    </p>

      {/* <p>Username: {user.username}</p>
      <p>Password: {user.password}</p> */}
    </div>
    
  );
}
export default Profile;

