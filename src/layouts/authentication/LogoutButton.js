// src/components/LogoutButton.js
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import SoftButton from "components/SoftButton";
// import { useNavigate } from "react-router-dom";

function LogoutButton() {
  //   const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
      location.href = "/authentication/sign-in"; // Redirect to sign-in page after logout
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SoftButton variant="gradient" color="light" onClick={handleLogout}>
      Logout
    </SoftButton>
  );
}

export default LogoutButton;
