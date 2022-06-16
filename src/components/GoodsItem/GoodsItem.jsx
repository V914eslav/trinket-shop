import React, { useContext } from "react";
import { ShopContext } from "../../context/context";

import styles from "./GoodsItem.module.css";
import cn from "classnames";

function GoodsItem(props) {
  // const { addToBacket = Function.prototype } = props;
  const { id, name, description, images } = props.granted[0];
  const { regularPrice: price } = props.price;
  const { addToBasket } = useContext(ShopContext);

  return (
    <div className={cn(styles.item, "card")} id={id}>
      <div className="card-image">
        <img src={images.full_background} alt={name} />
      </div>
      <div className={cn(styles.content, "card-content")}>
        <span className="card-title">{name}</span>

        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ id, name, price })}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
