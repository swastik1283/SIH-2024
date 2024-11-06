import React from "react";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import HistoryAndNewsletter from "../Components/History";
import Products from "../Components/Products";
import Blogs from "../Components/Blogs";
import Newsletter from "../Components/Newsletter";
import Accordion from "../Components/Accordion";

const Home = () => {
  return (
    <>
      <Slider />
      <HistoryAndNewsletter />
      <Products />
      <Blogs />
      <Accordion />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
