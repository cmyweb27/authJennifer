import React, { useState } from "react";

function Navbar() {
  const [openNow, setOpenNow] = useState(4);
  const [navToggle, setNavToggle] = useState(true);
  return (
    <div>
      <header id="header">
        <div className="header-top-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="header-login">
                  <a href="#">Order online</a>
                  <a href="#">Login</a>
                </div>
                {/* <!-- end .header-login -->
							<!-- Header Social --> */}
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <p className="call-us">
                  Call Us:{" "}
                  <a className="font" href="#">
                    +234-90-9388-6885
                  </a>
                  {openNow < 4 ? (
                    <span className="open-now">
                      <i className="fa fa-check-square"></i>We are open
                      (9am-10pm)
                    </span>
                  ) : (
                    <span className="close-now">
                      <i className="fa fa-square"></i>We are closed(10pm-9am)
                    </span>
                  )}
                </p>
              </div>
            </div>
            {/* <!-- end .row -->   */}
          </div>
        </div>
        {/* <!-- end .header-top-bar --> */}

        <div className="header-nav-bar">
          <nav className="navbar navbar-default" role="navigation">
            <div className="container">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  onClick={() => {
                    setNavToggle(!navToggle);
                  }}
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                  <img src="img/cverted-try.png" alt="TakeAway" height="35" />
                </a>
              </div>

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div
                className={
                  navToggle ? " collapse navbar-collapse" : "navbar-collapse"
                }
              >
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle act"
                      data-toggle="dropdown"
                    >
                      Home <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="index.html">Home-1</a>
                      </li>
                      <li>
                        <a href="index-landingpage.html">Home landing</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Menu Card <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="menu(view-1).html">Menu( view-1 )</a>
                      </li>
                      <li>
                        <a href="menu(view-2).html">Menu( view-2 )</a>
                      </li>
                      <li>
                        <a href="menu-without-side-panel.html">
                          Menu( grid-view )
                        </a>
                      </li>
                      <li>
                        <a href="single-menu.html">Single Menu</a>
                      </li>
                      <li>
                        <a href="menu(2grid-list).html">
                          Menu( 2grid-list-view )
                        </a>
                      </li>
                      <li>
                        <a href="menu-with-right-checkout.html">
                          Menu( with-checkout )
                        </a>
                      </li>
                      <li>
                        <a href="dish.html">Dish</a>
                      </li>
                      <li>
                        <a href="dish-with-no-sidebar.html">
                          Dish ( No Sidebar )
                        </a>
                      </li>
                      <li>
                        <a href="shortcodes.html">Shortcodes</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="chef.html">Chef</a>
                  </li>
                  <li>
                    <a href="our-team.html">Team</a>
                  </li>

                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Blog <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="blog-list.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-post.html">Blog Post</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      News & Events <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="news-events.html">News & Events list</a>
                      </li>
                      <li>
                        <a href="event-page.html">News & Events post</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact us</a>
                  </li>
                </ul>
              </div>
              {/* <!-- /.navbar-collapse --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
          </nav>
        </div>
        {/* <!-- end .header-nav-bar --> */}
        {/* <!-- small menu section --> */}
        <div className="small-menu">
          <div className="container">
            <ul className="list-unstyled list-inline">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <i className="fa fa-chevron-right"></i>
              </li>
              <li>
                <a href="our-team.html">Team</a>
              </li>
            </ul>
          </div>
          {/* <!-- end .container--> */}
        </div>
        {/* <!--end .small-menu --> */}
      </header>
    </div>
  );
}

export default Navbar;
