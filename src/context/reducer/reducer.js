export function reducer(state, action) {
  switch (action.type) {
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.id !== action.payload.id),
      };

    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    default:
      return state;
  }
}
