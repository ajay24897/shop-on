import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../Components/Widgets/index.css";
import "../../../src/index";
import { getProductForMen } from "../../Constants/common.constant";
import { getProductsGridUI, getProductUI } from "../pages.utils";
import useFetch from "../../Hooks/useFetch";

function Men() {
  let { id } = useParams();
  let history = useHistory();

  const [res, clearRes, fetchData] = useFetch();

  useEffect(() => {
    if (id !== undefined) {
      clearRes([]);
      fetchData(undefined, id);
    } else {
      clearRes([]);
      fetchData(getProductForMen);
    }
  }, [id]);

  useEffect(() => {
    console.log("res", res);
  });

  return !id ? (
    <div className="product-grid overflow-hidden ">
      {res && res?.length > 0
        ? res.map((product, index) =>
            getProductsGridUI(product, index, history, "/product/men")
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

export default Men;

// function Zoom({ id }) {
//   const [BGP, setBGP] = useState({
//     backgroundPosition: "0% 0%",
//     backgroundImage: `url(${fetchImageURL + id})`,
//   });
//   useEffect(() => {});

//   let handleMouseMove = (e) => {
//     const { left, top, width, height } = e.target.getBoundingClientRect();
//     const x = ((e.pageX - left) / width) * 100;
//     const y = ((e.pageY - top) / height) * 100;
//     setBGP({
//       backgroundPosition: `${x}% ${y}% !important`,
//       backgroundImage: `url(${fetchImageURL + `4`}) !important`,
//     });
//   };

//   return (
//     <figure onMouseMove={handleMouseMove} style={BGP}>
//       <img src={fetchImageURL + id} />
//     </figure>
//   );
// }
