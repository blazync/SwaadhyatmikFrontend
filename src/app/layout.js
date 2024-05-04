'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AdminNavbar from "../components/layout/AdminNavbar";
import AdminFooter from "../components/layout/AdminFooter";
import AdminSidebar from "../components/layout/AdminSidebar";
import { getJwtConfig } from "../config/JwtConfig";
import "./index.css";


export default function RootLayout({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    checkAdminLoggedIn();
  }, []);

  const checkAdminLoggedIn = async () => {
    try {
      if (getJwtConfig().role === "admin") // Corrected role check to "admin"
        setIsAdminLoggedIn(true);
    } catch (error) {
      setIsAdminLoggedIn(false);
    }
  };

  return (
    <html lang="en">
      <body >
        <div>
          {isAdminLoggedIn ? (
            <>
              <AdminNavbar />
              <AdminSidebar />
              <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                  {children}
                  <AdminFooter />
                </div>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </div>
      </body>
    </html>
  );
}
