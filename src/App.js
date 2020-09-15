import React from "react";
import Navbar from "./components/Navbar";
import MenuCard from "./components/MenuCard";
import Footer from "./components/Footer";
import Database from "./components/Database";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Database />
      <Footer />
    </div>
  );
}

export default App;
