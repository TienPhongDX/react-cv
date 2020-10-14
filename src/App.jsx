import React from "react";
import Main from "./Main";
import Preloader from "./compoment/Preloader";
import Sidebar from "./compoment/Sidebar";

function App() {
  return (
    <div>
      <Preloader />
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
