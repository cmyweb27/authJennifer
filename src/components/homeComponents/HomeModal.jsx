import React from "react";

function HomeModal() {
  return (
    <div className="container">
      <div className="call-to-action-section">
        <div className="css-table-cell">
          <div className="icon">
            <img src="img/content/call-to-action-icon1.png" alt="" />
          </div>
        </div>
        <div className="text css-table">
          <div className="css-table-cell">
            <h4>Purchase TakeAway</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin
              nibh augue, suscipit a, scelerisque sed, lacinia in, mi..
            </p>
          </div>

          <div className="css-table-cell">
            <a href="#" className="btn btn-default-red  pad-bottom">
              <i className="fa fa-file-text-o"></i> Read More
            </a>
          </div>

          <div className="css-table-cell">
            <a href="#" className="btn btn-default-red-inverse pad-top">
              <i className="fa fa-shopping-cart"></i> Purchase Now!
            </a>
          </div>
        </div>
      </div>
      {/* <!-- end .call-to-action-section --> */}
    </div>
  );
}

export default HomeModal;
