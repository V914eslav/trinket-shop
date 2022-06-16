import React, { useContext } from "react";
import { ShopContext } from "../../context/context";
import BasketItem from "../BasketItem";

import styles from "./BaketList.module.css";
import cn from "classnames";

function BaketList() {
  const { order = [], handleBaketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className={cn("collection", styles["basket-list"])}>
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => {
          return <BasketItem key={item.id} {...item} />;
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}

      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
        <span
          className={cn("secondary-content", "btn-samll", styles["checkout"])}
        >
          Оформить
        </span>
      </li>
      <i
        className={cn("material-icons", styles["backet-close"])}
        onClick={handleBaketShow}
      >
        close
      </i>
    </ul>
  );
}

export default BaketList;
