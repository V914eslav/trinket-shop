import React, { useEffect, useContext } from "react";
import { ShopContext } from "../../context/context";

import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";
import Cart from "../Cart/Cart";
import BaketList from "../BaketList/BaketList";
import Alert from "../Alert/Alert";

import { API_KEY, API_URL } from "../../config";

import styles from "./Shop.module.css";
import cn from "classnames";
function Shop() {
  const { loading, order, isBsaketShow, alertName, setGoods } =
    useContext(ShopContext);

  // const [loading, setLoading] = useState(true);
  // const [goods, setGoods] = useState([]);
  // const [order, setOrder] = useState([]);
  // const [isBsaketShow, setBasketshow] = useState(false);
  // const [alertName, setAlertName] = useState(false);

  // const addToBasket = (item) => {
  //   const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
  //   if (itemIndex < 0) {
  //     const newItem = {
  //       ...item,
  //       quantity: 1,
  //     };
  //     setOrder([...order, newItem]);
  //   } else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if (index === itemIndex) {
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });
  //     setOrder(newOrder);
  //   }
  //   setAlertName(item.name);
  // };
  // const handleBaketShow = () => {
  //   setBasketshow(!isBsaketShow);
  // };
  // const removeFromBasket = (itemId) => {
  //   const newOrder = order.filter((el) => el.id !== itemId);
  //   setOrder(newOrder);
  // };
  // const incQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity + 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };

  // const decQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity - 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity >= 0 ? newQuantity : 0,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };
  // const closeAlert = (name) => {
  //   setAlertName("");
  // };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={cn(styles.shop, "container", "content")}>
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBsaketShow && <BaketList />}
      {alertName ? <Alert /> : null}
    </div>
  );
}

export default Shop;
