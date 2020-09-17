import React, { useState, useEffect } from "react";
import firebase from "./firebase";

import SidePanel from "./SidePanel";
import MenuItem from "./menuComponents/MenuItem";

function MenuCard(props) {
  const [data, setData] = useState([]);
  const [pic, setPic] = useState("");
  let storage = firebase.storage();
  var storageRef = storage.ref();
  const db = firebase.firestore();

  useEffect(() => {
    var starsRef = storageRef.child("fullplatterlast.jpg");
    starsRef.getDownloadURL().then(function (url) {
      // Insert url into an <img> tag to "download"
      setPic(url);
    });
    db.collection("menuItem")
      .get()
      .then((querySnapshot) => {
        const dat = querySnapshot.docs.map((doc) => {
          console.log(doc.id);
          return doc.data();
        });
        setData(dat);
        console.log(dat);
      });
  }, []);
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
                      {" "}
                      {data.map((x) => (
                        <MenuItem
                          key={x.content}
                          content={x.content}
                          name={x.itemName}
                          price={x.itemPrice}
                          image={x.image}
                        />
                      ))}
                    </div>
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
