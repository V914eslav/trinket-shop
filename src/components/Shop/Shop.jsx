import React, { useState, useEffect } from "react";

import styles from "./Shop.module.css";
import cn from "classnames";
import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";
import { API_KEY, API_URL } from "../../config";
import Cart from "../Cart/Cart";
import BaketList from "../BaketList/BaketList";

function Shop() {
  const [loading, setLoading] = useState(true);
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [isBsaketShow, setBasketshow] = useState(false);
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.shop && setGoods(data.shop);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToBacket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };
  const handleBaketShow = () => {
    setBasketshow(!isBsaketShow);
  };
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };
  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  return (
    <div className={cn(styles.shop, "container", "content")}>
      <Cart quantity={order.length} handleBaketShow={handleBaketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBacket={addToBacket} />
      )}
      {isBsaketShow && (
        <BaketList
          order={order}
          handleBaketShow={handleBaketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
    </div>
  );
}

export default Shop;
