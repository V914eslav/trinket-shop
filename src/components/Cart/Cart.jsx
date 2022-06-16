import React, { useContext } from "react";
import { ShopContext } from "../../context/context";

import styles from "./Cart.module.css";
import cn from "classnames";

function Cart() {
  const { order, handleBaketShow = Function.prototype } =
    useContext(ShopContext);
  const quantity = order.length;
  return (
    <div
      className={cn(styles.cart, "blue", "darken-4", "white-text")}
      onClick={handleBaketShow}
    >
      <i className="material-icons">shopping_cart</i>
      {quantity ? (
        <span className={styles["cart-quantity"]}>{quantity}</span>
      ) : null}
    </div>
  );
}

export default Cart;
