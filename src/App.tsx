import React from "react";

import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import Content from "./components/content/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
