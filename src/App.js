import React from "react";
import Navbar from "./components/Navbar";
import MenuCard from "./components/MenuCard";
import Home from "./components/homeComponents/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MenuCard /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
