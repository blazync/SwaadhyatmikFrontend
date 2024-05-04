"use client";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { loginSchema } from "./../../../schemas/index";
import { loginUser } from "../../../api/auth";

const Login = ({ updateUserLoggedIn }) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const token = await loginUser({ ...values });
        localStorage.setItem("token", token);
        router.push("/dashboard");
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });
  return (
    <div className=" flex justify-center items-center" style={{ margin: "5%" }}>
      <div className="max-w-fit max-w-md bg-white rounded-lg container card shadow-lg p-5 ">
        {/* Left side */}
        <div className="flex-1">
          <div className="text-center">
            <Image
              src="/img/about.png"
              alt="avatar"
              className="mx-auto"
              width={100}
              height={100}
            />
            <h1 className="text-4xl font-bold mt-4">Welcome Back!</h1>
            <p className="text-gray-500">
              Login to Get Started with Swaadhyatmik Services
            </p>
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1">
          {/* <h1 className="text-4xl font-bold mt-4">Login Now</h1>
          <p className="text-gray-500">Login to Get Started with Us</p> */}
          <form className="mt-6" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="text"
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
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              Not a Member?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
