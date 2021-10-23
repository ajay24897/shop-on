import React from "react";
import { useHistory } from "react-router";

function Cart() {
  let history = useHistory();

  let handleClick = () => {
    history.push("/about");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        background: "#f2f2f2",
        padding: "20px",
      }}
    >
      efioehfioe
    </div>
  );
}

export default Cart;
