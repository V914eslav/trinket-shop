import React, { useContext } from "react";
import { ShopContext } from "../../context/context";
import GoodsItem from "../GoodsItem";

import styles from "./GoodsList.module.css";

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className={styles.goods}>
      {goods.map((item) => {
        return <GoodsItem key={item.mainId} {...item} />;
      })}
    </div>
  );
}

export default GoodsList;
