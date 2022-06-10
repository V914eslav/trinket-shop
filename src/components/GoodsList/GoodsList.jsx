import React from "react";
import GoodsItem from "../GoodsItem/GoodsItem";

function GoodsList() {
  return <div>{"Нет товаров" && <GoodsItem />}</div>;
}

export default GoodsList;
