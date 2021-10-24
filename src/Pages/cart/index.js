import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useFetch from "../../Hooks/useFetch";

function Cart() {
  // let history = useHistory();

  // let [productId, setProductId] = useState([]);
  // let [cartItem, setCartItem] = useState([]);
  // const [res, clearRes, fetchData] = useFetch();

  // useEffect(() => {
  //   let data = JSON.parse(localStorage.getItem("cartItem"));

  //   if (Array.isArray(data)) {
  //     setProductId(data);
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("productId.length", productId.length);
  //   if (productId.length > 0) {
  //     productId.map((item) => {
  //       fetchData(item);
  //       setCartItem([...cartItem, res]);
  //     });
  //   }
  //   console.log("setProductId".cartItem);
  // }, [productId]);

  // let handleClick = () => {
  //   history.push("/about");
  // };
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
      }}
    ></div>
  );
}

export default Cart;

// 0: "a485985b-832e-48e0-bf55-105a50af84e3"
// 1: "a485985b-832e-48e0-bf55-105a50af84e3"
// 2: "39940369-fcfd-4e9f-8e7b-c4aa365c1162"
