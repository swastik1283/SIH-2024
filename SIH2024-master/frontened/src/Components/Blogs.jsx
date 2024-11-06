import React from "react";
import "../Css/Blogs.css";
import BlogCards from "./BlogCards";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Line from "./Line";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Blogs = () => {
  return (
    <ul className="blogs-section">
      <div className="blogs-heading">
        <Line />
        <span>Blogs</span>
      </div>
      <Carousel
        swipeable={true}
        partialVisbile={false}
        draggable={false}
        arrows={true}
        responsive={responsive}
        ssr={true}
        containerClass="blog-carousel"
        itemClass="blog-carousel-item"
      >
        {Array(10)
          .fill(1)
          .map((_, i) => (
            <BlogCards key={i} />
          ))}
      </Carousel>
    </ul>
  );
};

export default Blogs;
