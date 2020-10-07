import React from "react";
import Navbar from "./components/Navbar";
import MenuCard from "./components/MenuCard";
import Home from "./components/homeComponents/Home";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <body>
        <div id="main-wrapper">
          <Navbar />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={MenuCard} path="/menu" />
          </Switch>

          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;
