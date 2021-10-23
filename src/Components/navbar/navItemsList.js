import { FaShoppingCart } from "react-icons/fa";

export const mobileItems = [
  {
    to: "/product/men",
    title: "Men",
  },
  {
    to: "/product/women",
    title: "Women",
  },

  {
    to: "/about",
    title: "About",
  },
  {
    to: "/singIn",
    title: "Sign In",
  },
];

export const desktopItems = [
  {
    to: "/singIn",
    title: "Sign In",
    exact: false,
  },
  {
    to: "/cart",
    title: <FaShoppingCart size={22} />,
    exact: false,
  },
  {
    to: "/about",
    title: "About",
    exact: true,
  },
  {
    to: "/product/women",
    title: "Women",
    exact: false,
  },
  {
    to: "/product/men",
    title: "Men",
    exact: false,
  },
];
