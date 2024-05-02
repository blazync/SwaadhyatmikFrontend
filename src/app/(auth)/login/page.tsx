'use client'
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { loginSchema } from "./../../../schemas/index";

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
        const response = await fetch("http://localhost:4000/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok && data.success === "Successful Login") {
          // Login successful
          console.log("Login successful:", data);
          // Set token in session
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("LoggedIn", 'true');
          // Update loggedIn state in parent component
          updateUserLoggedIn(true);
          // Redirect to dashboard
          window.location.reload();
          router.push("/dashboard");
        } else {
          // Login failed
          console.error("Login failed:", data);
          // Show alert
          alert("Login failed. Please check your credentials.");
        }
      } catch (error) {
        console.error("Login error:", error);
        // Handle other errors, such as network errors
      }
    },
  });

  return (
    <div className="h-screen flex justify-center items-center" style={{ margin: '5%' }}>
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
            <h1 className="text-4xl font-bold mt-4">Welcome Back!</h1>
            <p className="text-gray-500">Login to Get Started with Swaadhyatmik Services</p>
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mt-4">Login Now</h1>
          <p className="text-gray-500">Login to Get Started with Us</p>
          <form className="mt-6" onSubmit={formik.handleSubmit}>
  
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
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
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
                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
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
