import React from "react";

const Enquiry = () => {
  // Sample data for demonstration
  const enquiries = [
    { id: 1, name: "John Doe", email: "john@example.com", phoneNumber: "1234567890", message: "Lorem ipsum dolor sit amet." },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phoneNumber: "9876543210", message: "Consectetur adipiscing elit." },
    // Add more enquiry data as needed
  ];

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Services Data</h1>
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
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id}>
                <td className="px-6 py-4 whitespace-nowrap">{enquiry.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enquiry.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enquiry.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enquiry.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enquiry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Enquiry;
