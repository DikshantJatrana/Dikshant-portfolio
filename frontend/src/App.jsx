import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-orange-100/70 text-black font-bold text-6xl flex flex-col justify-center items-center">
      <span>Dikshant Jatrana</span>
      <span className="text-4xl text-center">Portfolio Website</span>
    </div>
  );
}

export default App;
