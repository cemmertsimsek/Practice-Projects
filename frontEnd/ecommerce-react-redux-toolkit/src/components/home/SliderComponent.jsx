import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
   // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slider">
        <div className="slider-info">
          <h3>Nike Air Max 90 Drift</h3>
          <p>Erkek Ayakkabısı</p>
          <span>₺6.299,90</span>
          <div className="slider-btn">
            <button className="btn-dark">Add to Cart</button>
            <button className="btn-light">
              Add to Favourites <IoIosHeartEmpty />
            </button>
          </div>
        </div>
        <div className="slider-img">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/03eb1ca3-540b-4d85-8485-aa19f9d32531/AIR+MAX+90+DRIFT.png"
            alt=""
          />
        </div>
      </div>
      <div className="slider">
        <div className="slider-info">
          <h3>Nike Air Max 90 Drift</h3>
          <p>Erkek Ayakkabısı</p>
          <span>₺6.299,90</span>
          <div className="slider-btn">
            <button className="btn-dark">Add to Cart</button>
            <button className="btn-light">
              Add to Favourites <IoIosHeartEmpty />
            </button>
          </div>
        </div>
        <div className="slider-img">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/94853576-a4cb-4e02-876a-a684c0ba1a8d/AIR+MAX+90+DRIFT.png"
            alt=""
          />
        </div>
      </div>
      <div className="slider">
        <div className="slider-info">
          <h3>Nike Air Max 90 Drift</h3>
          <p>Erkek Ayakkabısı</p>
          <span>₺6.299,90</span>
          <div className="slider-btn">
            <button className="btn-dark">Add to Cart</button>
            <button className="btn-light">
              Add to Favourites <IoIosHeartEmpty />
            </button>
          </div>
        </div>
        <div className="slider-img">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9735d6fa-77da-4c5e-a4bd-1f691e307394/AIR+MAX+90+DRIFT.png"
            alt=""
          />
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent;
