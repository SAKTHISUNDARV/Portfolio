// App.jsx or main layout component
import React from "react";
import Sidebar from "./components/Sidebar/sidebar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Main />
    </div>
  );
};

export default App;

