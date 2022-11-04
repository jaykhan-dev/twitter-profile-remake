import { useState } from "react";
import reactLogo from "./assets/react.svg";
import TwitterProfile from "./components/TwitterProfile";

function App() {
  return (
    <div className="App bg-gray-900 text-white h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold my-4">Twitter Profile</h1>
        <p className="text-gray-400 text-sm">made with React + Tailwind</p>
      </div>
      <TwitterProfile />
    </div>
  );
}

export default App;
