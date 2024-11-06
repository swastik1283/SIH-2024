import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Css/Slider.css";
import CTAButton from "./CTAButton";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const Slider = () => {
  return (
    <Carousel
      arrows={false}
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      //   keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      //   removeArrowOnDeviceType={["tablet", "mobile"]}
      //   deviceType={this.props.deviceType}
      //   dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="slide">
        <div className="diagonal">
          <p>Hlo all! This is sample1. I hope u guys like this one.</p>
          <br />
          <CTAButton title="Login" />
          <CTAButton title="SignUp" />
        </div>
      </div>
      <div className="slide">
        <div className="diagonal">
          <ul>
            <li>
              <p>Hlo all! This is sample2. I hope u guys like this one.</p>
            </li>

            <li>
              <CTAButton title="Create" />
              <CTAButton title="Register" />
            </li>
          </ul>
        </div>
      </div>
      <div className="slide">
        <div className="diagonal">
          <p>Hlo all! This is sample3. I hope u guys like this one.</p>
          <CTAButton title="Hi" />
          <CTAButton title="Hola" />
        </div>
      </div>
      <div className="slide">
        <div className="diagonal">
          <p>Hlo all! This is sample4. I hope u guys like this one.</p>
          <CTAButton title="Hoi" />
          <CTAButton title="Hemlo" />
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
