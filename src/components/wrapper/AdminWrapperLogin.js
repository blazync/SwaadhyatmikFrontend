'use client'
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AutherizationError from "../../components/errors/AuhtorizationError";
import getJwtConfig from "../../config/JwtConfig";

const AdminWrapperLogin = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  useEffect(() => {
    checkAdminLoggedIn();
  }, []);

  const checkAdminLoggedIn = async () => {
    try {
      if (getJwtConfig().role === "user" || getJwtConfig().role === "admin")
        setIsAdminLoggedIn(true);
    } catch (error) {
      // If an error occurs, the admin is not logged in
      setIsAdminLoggedIn(false);
    }
  };

  return isAdminLoggedIn ? children : <AutherizationError />;
};

AdminWrapperLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminWrapperLogin;
