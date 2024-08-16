import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkThemeToggle } from "flowbite-react";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { Login } from "./pages/Login";

function App() {
  return (
    <Router>
      <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
        <DarkThemeToggle className="absolute right-4 top-4" />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
