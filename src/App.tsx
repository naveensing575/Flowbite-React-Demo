import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkThemeToggle } from "flowbite-react";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
        <DarkThemeToggle className="absolute right-4 top-4" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
