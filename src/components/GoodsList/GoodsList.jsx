import React from "react";
import GoodsItem from "../GoodsItem";

import styles from "./GoodsList.module.css";

function GoodsList(props) {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  console.log(goods[0]);

  return (
    <div className={styles.goods}>
      {goods.map((item) => {
        return <GoodsItem key={item.mainId} {...item} />;
      })}
    </div>
  );
}

export default GoodsList;
