import React, { useState, useEffect, Component } from "react";
import Axios from "axios";
import { useParams, useHistory } from "react-router";

import "../../Components/Widgets/index.css";
import "../../../src/index";
import useFetch from "../../Hooks/useFetch";
import {
  getProductForMen,
  getProductForWomen,
} from "../../Constants/common.constant";
import { getProductsFlexUI } from "../pages.utils";

import MensShopping from ".././../Media/Images/men shope.webp";
import WomensShopping from ".././../Media/Images/women shope.png";

import airforceBanner from "../../Media/Carousel images/air-force-1-banner.jpeg";
import Appleser4Banner from "../../Media/Carousel images/banner-watch-seri4.jpeg";
import nmd from "../../Media/Carousel images/nmd.jpeg";
import { useDispatch } from "react-redux";
import { isLoading } from "../../Redux/actions/commonAction";

function Home() {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();

  const [menRes, clearResMen, fetchDataForMen] = useFetch();
  const [womenRes, clearResWonem, fetchDataForWomen] = useFetch();

  useEffect(() => {
    clearResMen();
    clearResWonem();
    dispatch(isLoading(true));
    setTimeout(() => {
      fetchDataForWomen(getProductForWomen);
    }, 2000);
    fetchDataForMen(getProductForMen);
  }, []);
  useEffect(() => {
    console.log(
      "menRes",
      menRes,
      // menRes?.map((product) => console.log(product)),
      womenRes
    );
  });
  return (
    <div>
      <Carousel />
      <div className="home-shopefor-cnt" style={{ position: "relative" }}>
        <div className="home-shopefor-imgCnt men-women-shado"></div>

        <div className={"home-shopefor-imgCnt"}>
          <img src={MensShopping} className={"home-shopefor-img"} />
          <button
            className="shopeForBtn"
            onClick={() => history.push("/product/men")}
          >
            Men
          </button>
        </div>
        <div className="home-shopefor-imgCnt">
          <img src={WomensShopping} className={"home-shopefor-img"} />
          <button
            className="shopeForBtn"
            onClick={() => history.push("/product/women")}
          >
            Women
          </button>
        </div>
      </div>
      <div className="new-arrivals-cnt">
        <p className="new-arrivals-text">Men's new arrivals</p>
        <div className="horizontal-grid">
          {menRes && menRes?.length > 0
            ? menRes
                ?.slice(Math.max(menRes.length - 10, 0))
                ?.map((product, index) => (
                  <div className="d-flex">
                    {getProductsFlexUI(product, index, history, "/product/men")}
                  </div>
                ))
            : "No data found"}
        </div>

        <p className="new-arrivals-text">Women's new arrivals</p>
        <div className="horizontal-grid">
          {womenRes && womenRes.length > 0
            ? womenRes
                .slice(Math.max(womenRes.length - 10, 0))
                .map((product, index) => (
                  <div className="d-flex">
                    {getProductsFlexUI(
                      product,
                      index,
                      history,
                      "/product/women"
                    )}
                  </div>
                ))
            : "No data found"}
        </div>
      </div>
    </div>
  );
}

export default Home;

var imageData = [
  { img: nmd },
  { img: airforceBanner },
  { img: Appleser4Banner },
];

function Carousel(props) {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const slider = document.querySelector(".slider");

    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    let direction;
    let imageSlide = setInterval(() => {
      direction = -1;
      carousel.style.justifyContent = "flex-start";
      slider.style.transform = "translate(-33.33%)";
    }, 2000);

    slider.addEventListener(
      "transitionend",
      function () {
        if (direction === 1) {
          slider.prepend(slider.lastElementChild);
        } else {
          slider.appendChild(slider.firstElementChild);
        }
        slider.style.transition = "none";
        slider.style.transform = "translate(0)";
        setTimeout(() => {
          slider.style.transition = "all 0.5s";
        });
      },
      false
    );
    return () => {
      clearInterval(imageSlide);
    };
  }, []);
  return (
    <div class="carousel overflow-hidden">
      <div
        className="slider"
        style={{
          display: "flex",
          flexShrink: 0,
          transition: "all 0.5s",
          overflow: "hidden",
          width: "300%",
        }}
      >
        {imageData.map((image, index) => {
          return (
            <img
              src={image.img}
              className="carousel-img"
              width="100vw"
              alt={"jebndjenb"}
              title={"wdknejd"}
            />
          );
        })}
      </div>
    </div>
  );
}
