import React from "react";
import HomeModal from "./HomeModal";
import MenuOptions from "./MenuOptions";
import Welcome from "./Welcome";

import Carousel from "./Carousel";
import Glides from "./Glides";
function Home() {
  return (
    <div id="page-content">
      <Carousel />
      {/* <Glides /> */}

      <HomeModal />
      <MenuOptions />
      <Welcome />
    </div>
  );
}

export default Home;
