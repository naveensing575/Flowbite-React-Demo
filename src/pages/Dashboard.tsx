import { useState, useEffect } from "react";
import Chart from "../components/Chart";
import CircularChart from "../components/CircularChart";
import BarChart from "../components/BarChart";
import { HiMenu } from "react-icons/hi";
import Sidebar from "../components/Sidebar";
import { NavBar } from "../components/NavBar";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isSidebarOpen && !event.target.closest(".sidebar")) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex h-screen flex-col bg-gray-100 dark:bg-gray-900">
      <NavBar /> {/* Add Navbar here */}
      <div className="flex h-full">
        {isSidebarOpen && <Sidebar />}
        <div className="flex h-full flex-1 flex-col bg-gray-100 dark:bg-gray-900">
          {" "}
          {/* Ensure consistent background color */}
          <header className="flex items-center bg-white p-4 dark:bg-gray-800">
            <button
              onClick={toggleSidebar}
              className="text-gray-900 dark:text-white"
              aria-label="Toggle Sidebar"
            >
              <HiMenu className="text-2xl" />
            </button>
            <h2 className="ml-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Dashboard
            </h2>
          </header>
          <main className="flex-1 overflow-y-auto bg-gray-100 p-6 dark:bg-gray-900">
            {" "}
            {/* Ensure consistent background color */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Traffic Overview
                </h3>
                <Chart />
              </div>
              <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Website Traffic Breakdown
                </h3>
                <CircularChart />
              </div>
              <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Sales Overview - IT Dep
                </h3>
                <BarChart />
              </div>
              <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Sales Overview - Business Dep
                </h3>
                <BarChart />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
