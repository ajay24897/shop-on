export const increament = (payload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};
export const decreament = (payload) => {
  return {
    type: "DECREMENT",
    payload,
  };
};
