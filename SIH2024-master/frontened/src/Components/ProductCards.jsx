import React from "react";
import "../Css/ProductCards.css";
import { FaCartPlus } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const ProductCards = ({ data }) => {
  // console.log(data);
  return (
    <>
      <div className="product-card">
        <div className="product-card-container">
          <div className="product-card-image-container">
            <div
              className="product-card-image"
              style={{
                background: `URL(${data.url})`,
                backgroundPosition: "center",
              }}
            ></div>
            {/* <img src={`${data.url}`} alt="product-img" /> */}
          </div>
          <div className="product-card-content">
            <a className="product-card-title">{data.name}</a>
            <p className="price">Price: {data.price + " "}Rs</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ornare auctor metus vel mollis.
            </p>
            <ul className="card-action-buttons">
              <li>
                <a id="buy">
                  <FaCartPlus />
                </a>
              </li>
              <li>
                <a id="buy">
                  <FaShareAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
