"use client";
import { useState } from "react";
import { FaUser, FaCog, FaChartBar } from "react-icons/fa"; // Importing icons from react-icons
import AdminLayout from "../../layout/AdminLayout";
const Dashboard = () => {
  // State for calendar visibility
  const [showCalendar, setShowCalendar] = useState(true);

  // Function to toggle calendar visibility
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <AdminLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "5px",
            width: "30%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaUser size={50} style={{ marginRight: "10px" }} />
            <h3 style={{ margin: "0" }}>sessionStorage.getItem("LoggedIn")</h3>
          </div>
          <p style={{ margin: "0" }}>Total Enquiry</p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "5px",
            width: "30%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCog size={50} style={{ marginRight: "10px" }} />
            <h3 style={{ margin: "0" }}>Card 2</h3>
          </div>
          <p style={{ margin: "0" }}>Total Services</p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "5px",
            width: "30%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaChartBar size={50} style={{ marginRight: "10px" }} />
            <h3 style={{ margin: "0" }}>Card 3</h3>
          </div>
          <p style={{ margin: "0" }}>Content for card 3</p>
        </div>
      </div>

      {/* Google Calendar */}
      {showCalendar && (
        <div
          style={{
            width: "100%",
            height: "500px",
            backgroundColor: "#f0f0f0",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          {/* Insert Google Calendar component here */}
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=en.indian%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;ctz=Asia%2FCalcutta"
            style={{
              border: "0",
              width: "100%",
              height: "100%",
              frameborder: "0",
              scrolling: "no",
            }}
            allowFullScreen
            title="Google Calendar"
          ></iframe>
        </div>
      )}

      {/* Button to toggle calendar visibility */}
      <button onClick={toggleCalendar} style={{ marginTop: "20px" }}>
        {showCalendar ? "Hide Calendar" : "Show Calendar"}
      </button>
    </AdminLayout>
  );
};

export default Dashboard;
