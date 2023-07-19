export default (state = {}, { type, payload }) => {
  switch (type) {
    case "FETCH_CATEGORY":
      return [...state, payload];
    default:
      return state;
  }
};
