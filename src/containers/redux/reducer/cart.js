const InitialState = {
  carts: [],
  count: 1,
};

const cart = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, carts: payload };
    case "INC_CART":
      return { count: state.count + 1 };
    case "DEC_CART":
      return { count: state.count - 1 };
    case "DELETE_CART":
      return state.carts.filter(({ id }) => id != payload.id);
    default:
      return state;
  }
};
export default cart;
