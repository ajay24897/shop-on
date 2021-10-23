export const LoaderReducer = (state = false, action) => {
  switch (action.type) {
    case "isLoader":
      return action.payload;

    default:
      return state;
  }
};

const checkNtwork = () => {
  if (window.navigator.onLine == "on") {
    return true;
  } else {
    return false;
  }
};

export const NetworkInfoReducer = (state = checkNtwork(), action) => {
  switch (action.type) {
    case "isOnline":
      return action.payload;

    default:
      return state;
  }
};
