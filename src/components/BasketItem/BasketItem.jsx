import React from "react";

import styles from "./BasketItem.module.css";
import cn from "classnames";

function BasketItem(props) {
  const { id, name, price, quantity } = props;
  console.log(props);
  return (
    <li className="collection-item" id={id + id}>
      {name} x{quantity} ={price * quantity}р.
      <span href="#!" className="secondary-content">
        <i className={cn("material-icons", styles["delete-basket-item"])}>
          close
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
