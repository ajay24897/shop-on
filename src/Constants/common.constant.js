// export const BaseURL = `http://localhost:4000/api/`;
// export const getProductForMen = BaseURL + `getProductForMen`;
// export const getProductForWomen = BaseURL + `getProductForWomen`;
// export const getUserRegister = BaseURL + `register`;

// ////////////////////////
// export const fetchImageURL = "http://localhost:4000/images/";

// ///////

// export const BaseURL = `https://www.thesneakerdatabase.com/api`;
// // export const getProductForMen =
// //   "https://www.thesneakerdatabase.com/api/getData?gender=men";

// export const getProductForMen =
//   "https://www.thesneakerdatabase.com/api/getData?gender=men";
// export const getProductForWomen =
//   "https://www.thesneakerdatabase.com/api/getData?gender=women";

export const BaseURL = "https://v1-sneakers.p.rapidapi.com/v1/sneakers";

export const getProductForWomen = { limit: "100", gender: "women" };
export const getProductForMen = { limit: "100", gender: "men" };
export const getUserRegister = BaseURL + `register`;
