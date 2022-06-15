import React, { useEffect } from "react";
import styles from "./Alert.module.css";
import cn from "classnames";

function Alert(props) {
  const { name, closeAlert = Function.prototype } = props;

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
