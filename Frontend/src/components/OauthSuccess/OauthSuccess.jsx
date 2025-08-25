// OauthSuccess.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function OauthSuccess() {
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      window.location.href = "/dashboard"; // redirect after login
    }
  }, [token]);

  return <div>Logging you in...</div>;
}
export default OauthSuccess;