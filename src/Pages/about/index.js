import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../Components/Widgets/index.css";
import "../../../src/index";

function About() {
  const [productInfo, setProductInfo] = useState({ gender: "men" });
  const [res, setResData] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    console.log("preview", preview);
  }, [preview]);

  useEffect(() => {
    Axios.post("http://localhost:4000/api/getProduct")
      .then((res) => {
        console.log("responce", res.data.result);
        setResData(res.data.result);
      })
      .catch((error) => {});
  }, []);

  const imagePreview = (e) => {
    console.log("dfneioo");
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const updateValues = (e) => {
    console.log("e", e.target.value, e.target.name);

    if (e.target.name === "file") {
      setProductInfo({
        ...productInfo,
        [e.target.name]: e.target.files[0],
      });
      imagePreview(e);
    } else {
      setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
    }
  };

  const submitData = () => {
    let productDetails = new FormData();
    productDetails.append("data", JSON.stringify(productInfo));
    productDetails.append("file", productInfo.file);

    Axios.post(
      "http://localhost:4000/api/uploadProductDetails",
      productDetails,
      {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data;`,
        },
      }
    )
      .then((res) => {
        console.log("res.status", res);
        if (res.data.code === "ER_DUP_ENTRY") {
          alert(
            "Product name or product Image already exist plese ad other filr name"
          );
        } else {
          alert("uploaded");
        }
      })
      .catch((error) => {
        console.log("ER_DUP_ENTRY", error);
      });
  };

  return (
    <div className="flex-center">
      <div className="product-details padding-20 margin-vert-20">
        <h1 className="margin-vert-20">Product Information </h1>
        <h3>Name</h3>
        <input type={"text"} name="name" onChange={(e) => updateValues(e)} />
        <h3>Brand</h3>
        <input type={"text"} name="brand" onChange={(e) => updateValues(e)} />

        <h3>Price</h3>
        <input type={"number"} name="price" onChange={(e) => updateValues(e)} />

        <h3>Category</h3>
        <select
          name={"type"}
          style={{
            width: "100%",
          }}
          onChange={(e) => updateValues(e)}
        >
          <option value="Casual">select option</option>
          <option value="Watch">Watch</option>
          <option value="Shoe">Shoe</option>
          <option value="T-shirt">T-shirt</option>
          <option value="Shirt">Shirt</option>
          <option value="Cap">Cap</option>
          <option value="Goggles">Goggles</option>
        </select>

        <h3>Gender</h3>
        <div style={{ display: "flex", height: 20, marginTop: 10 }}>
          <input
            style={{ margin: "auto 0", marginRight: 5 }}
            type={"radio"}
            name={"gender"}
            value="men"
            id="men"
            defaultChecked
            onChange={(e) => updateValues(e)}
          />
          <label style={{ marginRight: 20 }} for="men">
            Men
          </label>

          <input
            type={"radio"}
            name={"gender"}
            value="women"
            id="women"
            style={{ margin: "auto 0", marginRight: 5 }}
            onChange={(e) => updateValues(e)}
          />

          <label style={{ marginRight: 20 }} for="Women">
            Women
          </label>
          <input
            type={"radio"}
            name={"gender"}
            value="both"
            id="both"
            style={{ margin: "auto 0", marginRight: 5 }}
            onChange={(e) => {
              updateValues(e);
            }}
          />

          <label style={{ marginRight: 5 }} for="both">
            Both
          </label>
        </div>
        <h3 style={{ marginTop: 10 }}>Image</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {preview && (
            <img
              src={preview}
              height={100}
              width={100}
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                margin: "10px",
              }}
              alt="selected file"
            />
          )}
          <input
            type={"file"}
            style={{ margin: "10px 0" }}
            name="file"
            onChange={(e) => {
              updateValues(e);
            }}
          />
        </div>

        <h3>Color</h3>
        <input type={"text"} name="color" onChange={(e) => updateValues(e)} />
        <h3>Description</h3>
        <textarea
          name="description"
          onChange={(e) => {
            updateValues(e);
          }}
        />
        <button
          className="button-submit"
          onClick={() => {
            submitData();
          }}
        >
          Submit
        </button>

        {/* {res &&
          res.map((item) => (
            <img
              width={100}
              height="100px"
              src={`http://localhost:4000/images/${item.file}`}
              alt={"item.shoe_name"}
            />
          ))} */}
      </div>
    </div>
  );
}

export default About;
