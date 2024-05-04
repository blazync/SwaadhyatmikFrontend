"use client";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { registrationSchema } from "./../../../schemas/index"; // Assuming you have a validation schema for registration
import { registerUser } from "../../../api/auth";

const Register = ({ updateUserLoggedIn }) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      mobile: "",
      profile_img: "",
      password: "",
    },
    validationSchema: registrationSchema,
    onSubmit: async (values) => {
      try {
        await registerUser({ ...values });
        console.log("user registred");
        router.push("/login");
      } catch (error) {
        console.error("Registration error:", error);
        // Handle other errors, such as network errors
      }
    },
  });

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ margin: "5%" }}
    >
      <div className="max-w-full max-w-md bg-white rounded-lg p-8 container flex">
        {/* Left side */}
        <div className="flex-1">
          <div className="text-center">
            <Image
              src="/img/about.png"
              alt="avatar"
              className="mx-auto"
              width={400}
              height={400}
            />
            <h1 className="text-4xl font-bold mt-4">
              Weclome to Swaadhyatmik!
            </h1>
            <p className="text-gray-500">
              Signup to Get Started with Swaadhyatmik Services
            </p>
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mt-4">Signup Now</h1>
          <p className="text-gray-500">Signup to Get Started with Us</p>
          <form className="mt-6" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your username"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.username}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-700">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your mobile number"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.mobile}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="profile_img" className="block text-gray-700">
                Profile Image URL
              </label>
              <input
                type="text"
                id="profile_img"
                name="profile_img"
                value={formik.values.profile_img}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter the URL of your profile image"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {formik.touched.profile_img && formik.errors.profile_img ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.profile_img}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full border bg-gray-800 text-white mb-3 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Create Account
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              Already a Member?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
