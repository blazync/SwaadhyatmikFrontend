"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import AdminSidebar from "../../components/layout/AdminSidebar";
import AdminNavbar from "../../components/layout/AdminNavbar";
import AdminFooter from "../../components/layout/AdminFooter";
import AdminWrapperLogin from "../../components/wrapper/AdminWrapperLogin";
const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <AdminWrapperLogin>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <div className="flex h-screen overflow-hidden">
          {sidebarOpen && (
            <AdminSidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          )}
          <div
            className={`relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden`}
          >
            <AdminNavbar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <main>
              <div>{children}</div>
            </main>
            <AdminFooter />
          </div>
        </div>
      </div>
    </AdminWrapperLogin>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
