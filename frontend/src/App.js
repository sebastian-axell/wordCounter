import React from "react";
import { TabSelector } from "./components/TabSelector";

function App() {
  
  return (
    <div className="bg-gray-700 h-screen text-yellow-100">
      <div className="mx-auto w-1/2 pt-10">
        <img className="ml-20" src="https://www.synechron.com/themes/synechron/images/logo-white.svg"/>
      </div>
      <h1 className="text-center mt-6 md:text-5xl font-bold text-xl">Welcome to word counter</h1>
      <TabSelector/>
    </div>
  )
}

export default App;
