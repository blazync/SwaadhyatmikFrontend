'use client'
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import authServices from "../../appwrite/auth";
import AutherizationError from "../../components/errors/AuthenticationError";

const AdminWrapperLogin = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  console.log(isAdminLoggedIn);
  useEffect(() => {
    checkAdminLoggedIn();
  }, []);

  const checkAdminLoggedIn = async () => {
    try {
      const user = await authServices.getCurrentUser();
      console.log(user);
      if (!user) return;
      setIsAdminLoggedIn(true);
    } catch (error) {
      setIsAdminLoggedIn(false);
    }
  };
  return isAdminLoggedIn ? children : <AutherizationError />;
};

AdminWrapperLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminWrapperLogin;