import React from "react";
import Slider from "react-slick";
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="">
      {/* <!-- new slide --> */}

      <Slider {...settings}>
        {/* <!-- new slide --> */}
        <div className="ms-slide">
          {/* <!-- slide background --> */}
          <img
            src="https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />
          {/* <!-- slide text layer --> */}
        </div>
        <div className="ms-slide">
          {/* <!-- slide background --> */}
          <img
            src="https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />
          {/* <!-- slide text layer --> */}
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
