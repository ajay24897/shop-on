import Axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import { fetchImageURL } from "../Constants/common.constant";

export const capitalizeFirstLetter = (str) => {
  const newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
  return newStr;
};

export const fetchAPI = async (url, type, data) => {
  if (type === "get") {
    try {
      let fetch = Axios.get(url);
      return fetch;
    } catch (error) {
      return error;
    }
  }
};

export const getProductFullInfo = ({
  brand,
  name,
  colorway,
  retailPrice,
  id,
  gender,
}) => {
  return (
    <div className="long-product-details" style={{ cursor: "default" }}>
      <p className="margin-b-10">Brand : {capitalizeFirstLetter(brand)}</p>
      <p className="margin-b-10">Name&nbsp;: {capitalizeFirstLetter(name)}</p>
      <p className="margin-b-10">
        Color&nbsp; : {capitalizeFirstLetter(colorway)}
      </p>
      <p className="margin-b-10">
        Type&nbsp;&nbsp; : {capitalizeFirstLetter(gender)}
      </p>
      <p className="margin-b-10">Price&nbsp;&nbsp; : $ {retailPrice}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <button
          className="button-buy"
          onClick={() => console.log(" product.id", id)}
        >
          Buy Now
        </button>
        <button className="button-cart" onClick={() => addIntoCart(id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export const getProductShortInfo = (brand, name, price) => {
  return (
    <div className="short-product-details">
      <p className="text-ellipsis margin-b-2">{capitalizeFirstLetter(brand)}</p>
      <p className="text-ellipsis margin-b-2">{capitalizeFirstLetter(name)}</p>
      <p className="text-ellipsis margin-b-2">$ {price}</p>
    </div>
  );
};

export const getLazyLoadImage = (url, altName, className) => {
  return (
    <div>
      <LazyLoadImage
        className={className}
        src={url}
        alt={altName}
        effect="blur"
      />
    </div>
  );
};

export const getProductsGridUI = (product, index, history, route) => {
  console.log("product", product);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="image-cnt cursor-pointer overflow-hidden "
      key={index}
      onClick={() => {
        history.push(`${route}/${product.id}`);
      }}
    >
      <div className="flex-r-center">
        {getLazyLoadImage(
          product.media.smallImageUrl,
          product.name,
          "productImg  image"
        )}
      </div>
      {getProductShortInfo(product.brand, product.name, product.retailPrice)}
    </div>
  );
};

export const getProductUI = (product, index) => {
  console.log("product", product);
  return (
    <div
      className="single-product-cnt cursor-pointer"
      key={index}
      data-aos="zoom-in"
      data-aos-duration="1500"
      style={{ width: "100%", display: "flex", overflow: "hidden" }}
    >
      {/* <div style={{ maxWidth: "100px", height: "100px" }}>
        {getLazyLoadImage(product.media.smallImageUrl, product.name)}
      </div> */}

      <div>
        <img className="single-img" src={product.media.smallImageUrl} />
      </div>

      {getProductFullInfo(product)}
    </div>
  );
};

export const getProductsFlexUI = (product, index, history, route) => {
  console.log("product", product);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="image-cnt cursor-pointer overflow-hidden"
      key={index}
      onClick={() => {
        history.push(`${route}/${product.id}`);
      }}
    >
      <div className="flex-r-center">
        {getLazyLoadImage(
          product.media.smallImageUrl,
          product.name,
          "productImg  image"
        )}
      </div>
      {getProductShortInfo(product.brand, product.name, product.retailPrice)}
    </div>
  );
};

const addIntoCart = (id) => {
  console.log(id);
  const products = JSON.parse(localStorage.getItem("cartItem"));
  if (Array.isArray(products)) {
    products.push(id);
    localStorage.setItem("cartItem", JSON.stringify(products));
  } else {
    let product = [];
    product.push(id);
    localStorage.setItem("cartItem", JSON.stringify(product));
  }
};
