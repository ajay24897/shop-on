import React from "react";
import styled from "styled-components";
import Gmail from "../../Media/svg/icons8-gmail.svg";
import facebook from "../../Media/svg/facebook.svg";
import instagram from "../../Media/svg/icons8-instagram.svg";
import tweeter from "../../Media/svg/icons8-twitter-circled.svg";
import linkedin from "../../Media/svg/linkedin.svg";
function Footer() {
  return (
    <div className="footer-cnt">
      <p style={{ margin: "10px 0px " }}>© 2021, ShopOn.com.</p>
      <div className="margin-b-10 d-flex">
        <ConnectUs />
      </div>
    </div>
  );
}

export default Footer;

const Connect = [
  {
    title: "Gmail",
    url: "mailto:ajaychwda1997@gmail.com",
    iconUrl: Gmail,
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100005829123942",
    iconUrl: facebook,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/Ajaychawda24",
    iconUrl: tweeter,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/ajay_chawda248",
    iconUrl: instagram,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/ajay-chawda-4530aa174/",
    iconUrl: linkedin,
  },
];

export const ConnectUs = () => {
  return Connect.map((item) => {
    return (
      <a
        href={item.url}
        target={"blank"}
        className="icons"
        title={item.title}
        style={{ margin: "0px 10px" }}
      >
        <Img src={item.iconUrl} alt={item.title}></Img>
      </a>
    );
  });
};

const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: none;
  cursor: pointer;
  transition: all 0.5s;
  box-shadow: 0 3px 5px 2px rgb(64 60 67 / 16%);
  :hover {
    animation: rotation 1s linear;
    box-shadow: 0 2px 5px 5px rgb(64 60 67 / 16%);
  }

  @keyframes rotation {
    0% {
      transform: scale(1);
    }
    33% {
      transform: rotate(45deg);
    }
    50% {
      transform: scale(1.3);
    }
    66% {
      transform: rotate(-90deg);
    }
    99% {
      transform: rotate(45deg);
    }
    100% {
      transform: scale(1);
    }
  }
`;
