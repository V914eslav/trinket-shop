import React, { useState, useEffect } from "react";
// import { API_KEY, API_URL } from "../config";

import styles from "./Shop.module.css";
import cn from "classnames";
import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";

function Shop() {
  const [loading, setLoading] = useState(true);
  const [goods, setGoods] = useState([]);
  // useEffect(function getGoods() {
  //   fetch(API_URL, {
  //     headers: {
  //       Authorization: API_KEY,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.featured && setGoods(data.featured);

  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className={cn(styles.shop, "container", "content")}>
      {loading ? <Preloader /> : <GoodsList />}
    </div>
  );
}

export default Shop;
