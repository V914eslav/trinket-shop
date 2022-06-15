import React, { useContext } from "react";
import { ShopContext } from "../../context/context";

import styles from "./BasketItem.module.css";
import cn from "classnames";

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;
  const { example } = useContext(ShopContext);
  console.log(example);
  return (
    <li className="collection-item">
      {name}
      <i
        className={cn("material-icons", styles["basket-quantity"])}
        onClick={() => decQuantity(id, quantity)}
      >
        remove
      </i>
      x{quantity}
      <i
        className={cn("material-icons", styles["basket-quantity"])}
        onClick={() => incQuantity(id, quantity)}
      >
        add
      </i>
      ={price * quantity}р.
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
