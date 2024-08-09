import { DarkThemeToggle } from "flowbite-react";
import Banner from "./components/Banner";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <DarkThemeToggle className="absolute right-4 top-4" />
      <Banner />
    </main>
  );
}

export default App;
