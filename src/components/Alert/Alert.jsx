import React, { useEffect, useContext } from "react";
import { ShopContext } from "../../context/context";

import styles from "./Alert.module.css";
import cn from "classnames";

function Alert() {
  const { alertName: name, closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);
  return (
    <div className={cn("toast-container", styles.container)}>
      <div className={cn("toast", styles.container)}>
        {name} добавлен в корзину
      </div>
    </div>
  );
}

export default Alert;
