import React from "react";
import GoodsItem from "../GoodsItem";

import styles from "./GoodsList.module.css";

function GoodsList(props) {
  const { goods = [], addToBacket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className={styles.goods}>
      {goods.map((item) => {
        return (
          <GoodsItem key={item.mainId} {...item} addToBacket={addToBacket} />
        );
      })}
    </div>
  );
}

export default GoodsList;
