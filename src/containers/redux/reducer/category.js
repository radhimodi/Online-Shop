const InitialState = [];

const category = (state = InitialState, action) => {
    const { type, payload } = action;
  switch (type) {
    case "CATEGORY_DATA":
      return [...state, payload];
    default:
      return state;
  }
};
export default category;