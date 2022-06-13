import React from "react";

import styles from "./BasketItem.module.css";
import cn from "classnames";

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {name} x{quantity} ={price * quantity}р.
      <span
        href="#!"
        className="secondary-content"
        onClick={() => removeFromBasket(id)}
      >
        <i className={cn("material-icons", styles["delete-basket-item"])}>
          close
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
