"use client";
import PropTypes from "prop-types";
import Navbar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
