import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { getProductForWomen } from "../../Constants/common.constant";
import { getProductUI, getProductsGridUI } from "../pages.utils";
import useFetch from "../../Hooks/useFetch";
import "react-lazy-load-image-component/src/effects/blur.css";

function Women() {
  let { id } = useParams();
  let history = useHistory();

  const [res, clearRes, fetchData] = useFetch();

  useEffect(() => {
    if (id !== undefined) {
      clearRes();
      fetchData(undefined, id);
    } else {
      clearRes();
      fetchData(getProductForWomen);
    }
  }, [id]);

  return !id ? (
    <div className="product-grid overflow-hidden">
      {res && res.length > 0
        ? res.map((product, index) =>
            getProductsGridUI(product, index, history, "/product/women")
          )
        : "No data Found"}
    </div>
  ) : (
    <div>
      {res &&
        res.length === 1 &&
        res.map((product, index) => getProductUI(product, index))}
    </div>
  );
}

export default Women;
