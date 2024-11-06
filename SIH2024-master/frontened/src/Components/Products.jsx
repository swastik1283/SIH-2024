import React from "react";
import { products_card_data } from "../data/ProductsData/product-cards-data";
import ProductCards from "./ProductCards";
import "../Css/Products.css";
import Line from "./Line";

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-heading-container">
        <Line />
        <p className="products-heading">New Arrivals</p>
      </div>
      <div className="filter-btn-container">
        <button className="filter-btn">Stamps</button>
        <button className="filter-btn">Envelopes</button>
        <button className="filter-btn">PostCards</button>
        <button className="filter-btn">Covers</button>
      </div>
      <div className="products-container">
        {products_card_data.map((product, index) => (
          <ProductCards data={product} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Products;
