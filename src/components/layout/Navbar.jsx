"use client";
import { useState } from "react";
// import authServices from "../../appwrite/auth";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  // State href manage the visibility of the user dropdown
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Function href toggle the user dropdown
  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = async () => {
    // try {
    //   await authServices.logout();
    //   navigate("/login");
    // } catch (error) {
    //   console.error("Logout failed", error);
    // }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
<nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 ">
  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="img/yoga.jpg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Swaadhyatmik</span>
    </a>
    <button
      data-collapse-toggle="mega-menu-full"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="mega-menu-full"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
        <li>
          <a
            href="/"
            className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li className="relative">
      <button
        id="mega-menu-full-dropdown-button"
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Services
        <svg
          className={`w-2.5 h-2.5 ms-3 transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-10 top-full left-0 mt-1 w-full bg-white rounded-md shadow-lg flex-md max-w-fit">
          {/* Dropdown items */}
          <Link href={'/aadiyogiforngo'}><li className="flex py-1 px-3 hover:bg-gray-100 cursor-pointer">Aadiyogi for NGO</li></Link>
          <Link href={'/maditationgroup'}><li className="flex py-1 px-3 hover:bg-gray-100 cursor-pointer">Maditation Group</li></Link>
          <Link href={'/freeconsultation'}><li className="flex py-1 px-3 hover:bg-gray-100 cursor-pointer">Free Consultation</li></Link>
          <Link href={'/yogamatcafe'}><li className="flex py-1 px-3 hover:bg-gray-100 cursor-pointer">Yoga Mat Cafe</li> </Link> 
        <Link href={'/aurvedictherapy'}><li className="flex py-1 px-3 hover:bg-gray-100 cursor-pointer">Aurvedic Therapy</li></Link>
          <Link href={'/aurvedicgurukul'}><li className="flex py-1 px-3 hover:bg-gray-100 cursor-pointer">Aurvedic Gurukul</li></Link>
        </ul>
      )}
    </li>
        <li>
          <a
            href="/about"
            className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </a>
          
        </li>
        
      </ul>
    </div>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <a
            href="/login"
            className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      </a>
    </div>
    
  </div>
  {/* <div id="mega-menu-full-dropdown" className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
      <ul aria-labelledby="mega-menu-full-dropdown-button">
        <li>
          <a href="aadiyogi-for-ngo" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Aadiyogi For NGO</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
          </a>
        </li>
        
        <li>
          <a href="yoga-mate-cafe" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Yoga Mate Cafe</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
          </a>
        </li>
      </ul>
      <ul>
        
      <li>
          <a href="maditationequipment" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Maditation Equipment</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
          </a>
        </li>
        <li>
          <a href="ayurvedictherapy" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Ayurvedic Therapy</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
          </a>
        </li>
      </ul>
      <ul className="hidden md:block">
      <li>
          <a href="freeconsultation" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Free Consultation</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
          </a>
        </li>
      
        
        <li>
          <a href="ayurvedicgurukul" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Ayurvedic Gurukul</div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
          </a>
        </li>
      </ul>
    </div>
  </div> */}
</nav>

  );
};

export default Navbar;
