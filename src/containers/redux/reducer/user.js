const InitialState = [];

const user = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REGISTER_DATA":
      return [...state, payload];
    case "LOGIN_DATA":
      return [...state, payload];
    default:
      return state;
  }
};
export default user;
