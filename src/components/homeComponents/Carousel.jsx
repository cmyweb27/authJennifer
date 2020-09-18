import React from "react";
import Slider from "react-slick";
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="master-slider ms-skin-black-2 round-skin" id="masterslider">
      {/* <!-- new slide --> */}

      <Slider {...settings}>
        <div className="ms-slide">
          {/* <!-- slide background --> */}
          <img
            src="https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          {/* <!-- slide text layer --> */}
          <div className="ms-layer ms-caption">
            <h1 className="text-right">
              <span>Hungry?!</span>
              <br />
              Good, we are here
              <br />
              to
              <span className="bold">serve</span>you
            </h1>
            <a href="#" className="btn btn-default">
              <i className="fa fa-file-text-o"></i>Read More
            </a>
          </div>
        </div>
        {/* <!-- end of slide --> */}
        {/* <!-- new slide --> */}
        <div className="ms-slide">
          {/* <!-- slide background --> */}
          <img
            src="https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          {/* <!-- slide text layer --> */}
          <div className="ms-layer ms-caption">
            <h1 className="text-right">
              <span>Hungry?!</span>
              <br />
              Good, we are here
              <br />
              to
              <span className="bold">serve</span>you
            </h1>
            <a href="#" className="btn btn-default">
              <i className="fa fa-file-text-o"></i>Read More
            </a>
          </div>
        </div>
        {/* <!-- new slide --> */}
        <div className="ms-slide">
          {/* <!-- slide background --> */}
          <img
            src="https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          {/* <!-- slide text layer --> */}
          <div className="ms-layer ms-caption">
            <h1>
              <span>Hungry?!</span>
              <br />
              Good, we are here
              <br />
              to
              <span className="bold">serve</span>you
            </h1>
            <a href="#" className="btn btn-default">
              <i className="fa fa-file-text-o"></i> Read More
            </a>
          </div>
        </div>{" "}
        <div className="ms-slide">
          {/* <!-- slide background --> */}
          <img
            src="https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          {/* <!-- slide text layer --> */}
          <div className="ms-layer ms-caption">
            <h1>
              <span>Hungry?!</span>
              <br />
              Good, we are here
              <br />
              to
              <span className="bold">serve</span>you
            </h1>
            <a href="#" className="btn btn-default">
              <i className="fa fa-file-text-o"></i> Read More
            </a>
          </div>
        </div>
        {/* <!-- end of slide --> */}
      </Slider>
    </div>
  );
}

export default Carousel;
