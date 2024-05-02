'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AdminNavbar from "../components/layout/AdminNavbar";
import AdminFooter from "../components/layout/AdminFooter";
import AdminSidebar from "../components/layout/AdminSidebar";
import { Inter } from "next/font/google"; // Import Inter font
import "./index.css";

const inter = Inter({ subsets: ["latin"] }); // Initialize Inter font

export default function RootLayout({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check user login status from session storage
    const userLoggedIn = sessionStorage.getItem("LoggedIn") === 'true';
    setLoggedIn(userLoggedIn);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {loggedIn ? <AdminNavbar /> : <Navbar />}
          {loggedIn && <AdminSidebar />}
          {loggedIn ? (
            <div className="p-4 sm:ml-64">
              <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                {/* Your grid and content goes here */}
                {children}
                {loggedIn && <AdminFooter />}
              </div>
            </div>
          ) : (
            children
          )}
          <Footer />
        </div>
      </body>
    </html>
  );
}
