'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = async () => {
    // Add your logout logic here
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 max-w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Link href="/">
              <div className="flex items-center">
                <img
                  src="/img/yoga.jpg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Swaadhyatmik
                </span>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isUserDropdownOpen}
                  onClick={toggleUserDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="w-8 h-8 rounded-full"
                    src="/img/male.png"
                    alt="user photo"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
              {isUserDropdownOpen && (
  <div className="absolute z-10 mt-2 w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
    <div className="px-4 py-3">
      <p className="text-sm text-gray-900 dark:text-white">Neil Sims</p>
      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">neil.sims@flowbite.com</p>
    </div>
    <ul className="py-1">
      <li>
        <Link href="#">
          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</button>
        </Link>
      </li>
      <li>
        <Link href="#">
          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</button>
        </Link>
      </li>
      <li>
        <Link href="#">
          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</button>
        </Link>
      </li>
      <li>
        <button onClick={handleLogout} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</button>
      </li>
    </ul>
  </div>
)}

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
