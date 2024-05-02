'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Enquiry = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isLoggedIn = sessionStorage.getItem("LoggedIn") === 'true';
        if (!isLoggedIn) {
          router.push("/login");
          return;
        }

        const token = sessionStorage.getItem("token");
        if (!token) {
          console.error("No token found in session storage.");
          setError("No token found in session storage.");
          return;
        }
        
        const response = await axios.get("http://localhost:4000/users", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {error && <div>Error: {error}</div>}
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">User Data</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Enquiry;
