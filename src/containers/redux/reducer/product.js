const InitialState = [];

const product = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_BY_CATEGORY_DATA":
      return [...state, payload];
    case "MOBILE_DATA":
      return [...state, payload];
    case "LAPTOP_DATA":
      return [...state, payload];
    case "CAMERA_DATA":
      return [...state, payload];
    case "CATEGORY_DETAIL":
      return [...state, payload];
    case "PLACE_ORDER":
      return [...state, payload];
    default:
      return state;
  }
};
export default product;
