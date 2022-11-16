import { useEffect, useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia(" (prefers-color-scheme:dark) ").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const darkModeClicked = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className=" bg-gradient-to-r from-pink dark:bg-none to-blue dark:bg-blueNuit font-Epilogue h-[100%] z-[2] ">
      <div className="   container mx-auto md:w-[1440px] w-[100%] ">
        <NavBar click={darkModeClicked} theme={theme} />
        <Content />
        <Footer />
      </div>
    </main>
  );
}

export default App;
