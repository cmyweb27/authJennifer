import React from "react";

function SidePanel() {
  return (
    <div className="col-md-3 col-sm-12 col-xs-12 col-md-pull-9">
      <div className="side-panel">
        <form className="default-form">
          <h6 className="toggle-main-title">Side Panel</h6>
          <div className="sd-panel-heading">
            <h5 className="toggle-title">My Check</h5>
            <div className="slideToggle">
              <ul className="list-unstyled">
                <li>
                  <p>
                    2x Shrimps
                    <span className="icon-link">
                      <i className="fa fa-pencil"></i>
                      <i className="fa fa-times"></i>
                    </span>
                  </p>

                  <p className="price">$ 19.95</p>
                </li>
                <li>
                  <p>
                    1x Coca cola
                    <span className="icon-link">
                      <i className="fa fa-pencil"></i>
                      <i className="fa fa-times"></i>
                    </span>
                  </p>

                  <p className="price">$ 1.95</p>
                </li>
                <li>
                  <p>
                    1x Sake
                    <span className="icon-link">
                      <i className="fa fa-pencil"></i>
                      <i className="fa fa-times"></i>
                    </span>
                  </p>

                  <p className="price">$ 15.95</p>
                </li>

                <li>
                  {/* <!-- list for total price--> */}
                  <p>Total</p>
                  <p className="price-total">$ 35.95</p>
                </li>
              </ul>

              <div className="checkout">
                <a className="btn btn-default-red" href="#">
                  <i className="fa fa-shopping-cart"></i>Checkout
                </a>
              </div>
            </div>
            {/* <!--end .slide-toggle --> */}
          </div>
          {/* <!-- end .sd-side-panel className --> */}

          {/* <div className="search-keyword">
            <input type="text" placeholder="Search by keyword" />
            <button type="submit" value="">
              <i className="fa fa-search"></i>
            </button>
          </div> */}
          {/* <!-- end .search-keyword --> */}
          {/* <div className="category">
            <h5 className="">Category</h5>
            <div className="toggle-content">
              <h5 className="toggle-title">Fruits</h5>
              <ul className="list-unstyled">
                <li>
                  <span className="checkbox-input">
                    <input type="checkbox" id="fruits-1" />
                    <label for="fruits-1">Chicken</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="fruits-2" />
                    <label for="fruits-2">Duck</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="fruits-3" />
                    <label for="fruits-3">Turky</label>
                  </span>
                </li>
              </ul>
            </div>

            <div className="toggle-content">
              <h5 className="toggle-title">Meat</h5>
              <ul className="list-unstyled">
                <li>
                  <span className="checkbox-input">
                    <input type="checkbox" id="meat-1" />
                    <label for="meat-1">Chicken</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="meat-2" />
                    <label for="meat-2">Duck</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="meat-3" />
                    <label for="meat-3">Turky</label>
                  </span>
                </li>
              </ul>
            </div>

            <div className="toggle-content">
              <h5 className="toggle-title">Fish</h5>
              <ul className="list-unstyled">
                <li>
                  <span className="checkbox-input">
                    <input type="checkbox" id="fish-1" />
                    <label for="fish-1">Chicken</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="fish-2" />
                    <label for="fish-1">Duck</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="fish-3" />
                    <label for="fish-3">Turky</label>
                  </span>
                </li>
              </ul>
            </div>

            <div className="toggle-content">
              <h5 className="toggle-title">poultry</h5>
              <ul className="list-unstyled">
                <li>
                  <span className="checkbox-input">
                    <input type="checkbox" id="poultry-1" />
                    <label for="poultry-1">Chicken</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="poultry-2" />
                    <label for="poultry-2">Duck</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="poultry-3" />
                    <label for="poultry-3">Turky</label>
                  </span>
                </li>
              </ul>
            </div>

            <div className="toggle-content">
              <h5 className="toggle-title">Vegitables</h5>
              <ul className="list-unstyled">
                <li>
                  <span className="checkbox-input">
                    <input type="checkbox" id="vegitable-1" />
                    <label for="vegitable-1">Chicken</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="vegitable-2" />
                    <label for="vegitable-2">Duck</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="vegitable-3" />
                    <label for="vegitable-3">Turky</label>
                  </span>
                </li>
              </ul>
            </div>

            <div className="toggle-content">
              <h5 className="toggle-title">Drinks</h5>
              <ul className="list-unstyled">
                <li>
                  <span className="checkbox-input">
                    <input type="checkbox" id="drinks-1" />
                    <label for="drinks-1">Chicken</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="drinks-2" />
                    <label for="drinks-2">Duck</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="drinks-3" />
                    <label for="drinks-3">Turky</label>
                  </span>
                </li>
              </ul>
            </div>

            <div className="toggle-content">
              <h5 className="toggle-title">Desserts</h5>
              <ul className="list-unstyled">
                <li>
                  <span className="checkbox-input">
                    <input type="checkbox" id="desserts-1" />
                    <label for="desserts-1">Chicken</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="desserts-2" />
                    <label for="desserts-2">Duck</label>
                  </span>
                  <span className="checkbox-input">
                    <input type="checkbox" id="desserts-3" />
                    <label for="desserts-3">Turky</label>
                  </span>
                </li>
              </ul>
            </div>
          </div> */}
          {/* <!--end .category--> */}
          {/* <div className="miscellaneous">
            <h5 className="">Miscellaneous</h5>
            <div className="radio">
              <span className="radio-input">
                <input type="radio" name="name-1" id="yes" checked />
                <label for="yes">Yes</label>
              </span>
              <span className="radio-input">
                <input type="radio" name="name-1" id="no" />
                <label for="no">No</label>
              </span>
            </div>

            <!--end .radio-input --> 

            <span className="checkbox-input">
              <input type="checkbox" id="option-1" checked />
              <label for="option-1">Option1</label>
            </span>
            <span className="checkbox-input">
              <input type="checkbox" id="option-2" />
              <label for="option-2">Option2</label>
            </span>

            <div className="tag">
              <ul className="list-inline">
                <li>
                  <a href="#">Tag 1</a>
                </li>
                <li>
                  <a href="#">Tag 2</a>
                </li>
                <li>
                  <a href="#">Tag 3</a>
                </li>
              </ul>
            </div>
          </div> */}
          {/* <!-- end .miscellaneous-->
								<!-- PRICE FILTER : begin --> */}
          {/* <div className="properties-search-filter">
            <div className="price-filter">
              <h5>Price Range</h5>
              <div className="">
                <div className="slider-range-container">
                  <div
                    className="slider-range"
                    data-min="1"
                    data-max="500"
                    data-step="1"
                    data-default-min="1"
                    data-default-max="195"
                    data-currency="$"
                  ></div>
                  <div className="clearfix">
                    <input type="text" className="range-from" value="$ 1" />
                    <input type="text" className="range-to" value="$ 500" />
                  </div>
                </div>
                <!-- end .slider-range-container -->
              </div>
            </div>
             <!-- end .price-filter --> 
          </div> */}
          {/* <!-- end .properties-search-filter --> */}

          {/* <div className="find-on-map">
            <h5>Search by Region</h5>
            <div className="banner-search">
              <div className="banner-search-inner">
                <ul className="custom-list tab-content-list">
                  <li className="tab-content active">
                    <span className="select-box" title="Country">
                      <select name="Country" data-placeholder="Country">
                        <option>Country</option>
                        <option value="USA">USA</option>
                        <option value="Uk">UK</option>
                        <option value="India">India</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Portugal">Portugal</option>
                      </select>
                    </span>
                    <span className="select-box" title="Region">
                      <select name="Region" data-placeholder="Region">
                        <option>Region</option>
                        <option value="USA">USA</option>
                        <option value="Uk">UK</option>
                        <option value="India">India</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Portugal">Portugal</option>
                      </select>
                    </span>
                    <span className="select-box" title="ZIP Code">
                      <select name="ZIP Code" data-placeholder="ZIP Code">
                        <option>ZIP Code</option>
                        <option value="USA">USA</option>
                        <option value="Uk">UK</option>
                        <option value="India">India</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Portugal">Portugal</option>
                      </select>
                    </span>
                  </li>
                </ul>
                <div className="map-section">
                  <div id="map_canvas"></div>
                </div>
                <!-- end .map-section -->
              </div>
              <!-- end .banner-search-inner -->
            </div>
            <!-- end .banner-search -->
          </div> */}
          {/* <!-- end .find-on-map --> */}
        </form>
        {/* <!-- end form --> */}
      </div>
      {/* <!-- end side-panel --> */}
    </div>
  );
}

export default SidePanel;
