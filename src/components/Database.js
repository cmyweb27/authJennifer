import React, { useEffect, useState } from "react";

import firebase from "./firebase";
import MenuCard from "./MenuCard";
function Database() {
  const [data, setData] = useState([]);
  const db = firebase.firestore();
  useEffect(() => {
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
    <div>
      {data.map((x) => (
        <MenuCard
          key={x.content}
          content={x.content}
          name={x.itemName}
          price={x.itemPrice}
        />
      ))}
    </div>
  );
}

export default Database;
