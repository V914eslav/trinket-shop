export function reducer(state, action) {
  switch (action.type) {
    case "SET_GOODS":
      return { ...state, goods: action.payload || [], loading: false };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.id !== action.payload.id),
      };

    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === action.payload.id
      );

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: action.payload.name,
      };
    }

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === action.payload.id) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === action.payload.id) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        }),
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "TOGGLE_BASKET":
      return {
        ...state,
        isBsaketShow: !state.isBsaketShow,
      };
    default:
      return state;
  }
}
