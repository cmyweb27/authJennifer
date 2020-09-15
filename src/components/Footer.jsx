import React from "react";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="main-footer">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <img src="img/header-logo.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Proin nibh augue, suscipit a, scelerisque sed.
                </p>
              </div>

              <div className="col-sm-6 col-md-3">
                <h5>Quick Links</h5>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="footer-links padd">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Menu Card</a>
                      </li>
                      <li>
                        <a href="#">reservation</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <ul className="footer-links">
                      <li>
                        <a href="#">about us</a>
                      </li>
                      <li>
                        <a href="#">news & events</a>
                      </li>
                      <li>
                        <a href="#">contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <h5>
                  Latest Tweets
                  <span>
                    <i className="fa fa-chevron-left"></i>{" "}
                    <i className="fa fa-chevron-right"></i>
                  </span>
                </h5>

                <p>
                  <a href="#">takeaway:</a> Take a (Photo) Tour of #Envato's
                  #Melbourne Headquarters (...)
                  <br />
                  <span>7 hours ago</span>
                </p>
              </div>

              <div className="col-sm-6 col-md-3">
                <h5>Newsletter</h5>
                <p>Sign up for our newsletter!</p>
                <div className="footer-subscribe">
                  <form>
                    <input type="Email" placeholder="Email address..." />
                    <button type="submit" value="">
                      <i className="fa fa-plus-circle-o"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <p>
              Copyright 2014 © TakeAway. All rights reserved. Powered by{" "}
              <a href="#">UOUapps</a>.
            </p>
            <ul className="footer-social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
