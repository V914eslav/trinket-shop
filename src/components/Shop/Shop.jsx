import React from "react";

import styles from "./Shop.module.css";
import cn from "classnames";
function Shop() {
  return <div className={cn(styles.shop, "container", "content")}>Shop</div>;
}

export default Shop;
