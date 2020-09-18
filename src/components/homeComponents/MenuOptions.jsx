import React from "react";

function MenuOptions() {
  return (
    <div className="category-boxes-icons">
      <div className=" container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="category-boxes-item">
              <figure>
                <img src="img/content/starter.jpg" />
                <h4>Starters</h4>
                <figcaption>
                  {" "}
                  <a href="#" className="btn btn-default-white">
                    <i className="fa fa-file-text-o"></i> Read More
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12  text-center">
            <div className="category-boxes-item">
              <figure>
                <img src="img/content/main-dish.jpg" />
                <h4>Main Dishes</h4>
                <figcaption>
                  <a href="#" className="btn btn-default-white">
                    <i className="fa fa-file-text-o"></i> Read More
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="category-boxes-item">
              <figure>
                <img src="img/content/desserts.jpg" />
                <h4>Desserts</h4>
                <figcaption>
                  {" "}
                  <a href="#" className="btn btn-default-white">
                    <i className="fa fa-file-text-o"></i> Read More
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="category-boxes-item">
              <figure>
                <img className="img-responsive" src="img/content/drinks.jpg" />
                <h4>Drinks</h4>
                <figcaption>
                  {" "}
                  <a href="#" className="btn btn-default-white">
                    <i className="fa fa-file-text-o"></i> Read More
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        {/* <!-- end .row --> */}
      </div>
      {/* <!-- end .category-boxes-icons --> */}
    </div>
  );
}

export default MenuOptions;
