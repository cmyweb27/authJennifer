import React, { useState } from "react";

import SidePanel from "./SidePanel";

function MenuCard(props) {
  const [sidesDisplay, setSideDisplay] = useState(false);
<<<<<<< HEAD
  const db = firebase.firestore();
  useEffect(() => {
    db.collection("menuItem")

      .get()

      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data().content);
        });
      });
    // db.collection("items")
    //   .add({
    //     first: "ekpedeme",
    //     last: "Lovelace",
    //     born: 1986,
    //   })
    //   .then(function (docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function (error) {
    //     console.error("Error adding document: ", error);
    //   });
  }, []);
=======

>>>>>>> dbd32465f8cfe00998a6e9b8369ff6ea902d3933
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
                    <div className="menu-with-details">
                      <div className="list-image">
                        <img src="img/content/menu-list-img.jpg" alt="" />
                      </div>
                      <div className="all-details">
                        <div className="visible-option">
                          <div className="details">
                            <h6>
                              <a href="dish.html">01. Shrimps</a>
                            </h6>
                            <ul className="share-this list-inline text-right">
                              <li>
                                <a href="#">Share</a>
                                <ul className="list-inline">
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
                                      <i className="fa fa-pinterest-square"></i>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <p className="m-with-details">
                              <strong>Description:</strong>
                              <br />
                              Phasellus ornare, ante vitae consectetuer
                              consequat, purus sapien ultricies dolor, et mollis
                              pede metus eget nisi. Praesent sodales velit quis
                              augue.
                            </p>

                            <p className="m-with-details">
                              <strong>Ingredients:</strong>
                              <br />
                              {props.content}
                            </p>

                            <p className="for-list">
                              5 tiger shrimps, garlic, butter, lemon, herbs, 5
                              tiger shrimps, garlic, butter, lemon, herbs
                            </p>
                          </div>

                          <div className="price-option fl">
                            <h4>$ 9.95</h4>
                            <button
                              onClick={() => {
                                setSideDisplay(!sidesDisplay);
                                console.log(sidesDisplay);
                              }}
                            >
                              Option
                            </button>
                          </div>
                          {/* <!-- end .price-option--> */}
                          <div className="qty-cart text-center clearfix">
                            <h6>Qty</h6>
                            <form className="">
                              <input type="text" placeholder="1" />
                              <br />
                              <button>
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                            </form>
                          </div>
                          {/* <!-- end .qty-cart --> */}
                        </div>
                        {/* <!-- end .vsible-option --> */}

                        <div
                          className={
                            sidesDisplay
                              ? "dropdown-option clearfix"
                              : "sides-display dropdown-option clearfix"
                          }
                        >
                          <div className="dropdown-details">
                            <form className="default-form">
                              <h5>Please Select Your Option</h5>
                              <h6>Option</h6>
                              <span className="radio-input">
                                <input type="radio" id="rice-1" name="choose" />
                                <label for="rice-1">Rice</label>
                              </span>

                              <span className="radio-input">
                                <input
                                  type="radio"
                                  id="noodles-1"
                                  name="choose"
                                />
                                <label for="noodles-1">Noodles</label>
                              </span>

                              <span className="radio-input">
                                <input
                                  type="radio"
                                  id="bread-1"
                                  name="choose"
                                />
                                <label for="bread-1">Bread</label>
                              </span>

                              <h6>Extras</h6>
                              <span className="checkbox-input">
                                <input type="checkbox" id="shrimps-1" />
                                <label for="shrimps-1">
                                  Double Shrimps
                                  <i className="fa fa-plus price">$3.00</i>
                                </label>
                              </span>

                              <span className="checkbox-input">
                                <input type="checkbox" id="extra-veggies-1" />
                                <label for="extra-veggies-1">
                                  Extra Veggies{" "}
                                  <i className="fa fa-plus price">$3.00</i>
                                </label>
                              </span>

                              <span className="checkbox-input">
                                <input
                                  type="checkbox"
                                  id="additional-butter-1"
                                />
                                <label for="additional-butter-1">
                                  Additional Butter{" "}
                                  <i className="fa fa-plus price">$3.00</i>
                                </label>
                              </span>

                              <h6>Additional Notes</h6>
                              <textarea placeholder="Write here"></textarea>

                              <a className="btn btn-default-red">Confirm</a>
                              <a className="btn btn-default-black">Cancel</a>
                            </form>
                          </div>
                          {/* <!--end .dropdown-details--> */}
                        </div>
                        {/* <!--end .dropdown-option--> */}
                      </div>
                      {/* <!-- end .all-details --> */}
                    </div>
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
