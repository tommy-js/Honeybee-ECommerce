const titleReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD_TITLE":
      return action.payload;
    default:
      return state;
  }
};
export default titleReducer;
