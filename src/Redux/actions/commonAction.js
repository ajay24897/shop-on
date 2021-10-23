export const isLoading = (payload) => {
  return {
    type: "isLoader",
    payload,
  };
};

export const isOnline = (payload) => {
  return {
    type: "isOnline",
    payload,
  };
};
