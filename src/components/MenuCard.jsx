import React, { useState } from "react";

import SidePanel from "./SidePanel";

function MenuCard(props) {
  const [sidesDisplay, setSideDisplay] = useState(false);
  return (
    <div id="main-wrapper">
      <div id="page-content">
        <div className="container">
          <div className="row mt30">
            <div className="col-md-9 col-sm-12 col-md-push-3">
              <ul className="nav nav-tabs" role="tablist">
                <li className="active">
                  <a href="#tab-1" role="tab" data-toggle="tab">
                    All
                  </a>
                </li>
                <li>
                  <a href="#tab-2" role="tab" data-toggle="tab">
                    Daily Menu
                  </a>
                </li>
                <li>
                  <a href="#tab-3" role="tab" data-toggle="tab">
                    Starters
                  </a>
                </li>
                <li>
                  <a href="#tab-3" role="tab" data-toggle="tab">
                    Main Course
                  </a>
                </li>
                <li>
                  <a href="#tab-3" role="tab" data-toggle="tab">
                    Dessert
                  </a>
                </li>
                <li>
                  <a href="#tab-3" role="tab" data-toggle="tab">
                    Recommended
                  </a>
                </li>
                <li>
                  <a href="#tab-3" role="tab" data-toggle="tab">
                    Starters
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade in active" id="tab-1">
                  <div className="all-menu-details">
                    <h5>Daily Menu</h5>

                    {/* <!-- end .item-list --> */}
                  </div>
                </div>
              </div>
            </div>
            <SidePanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
