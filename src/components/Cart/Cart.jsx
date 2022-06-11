import React from "react";

import styles from "./Cart.module.css";
import cn from "classnames";

function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className={cn(styles.cart, "blue", "darken-4", "white-text")}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? (
        <span className={styles["cart-quantity"]}>{quantity}</span>
      ) : null}
    </div>
  );
}

export default Cart;
