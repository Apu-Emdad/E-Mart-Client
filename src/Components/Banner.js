import React, { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import { bannerData } from "../Assets/data";

import "../Assets/CSS/Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    className: "slider-class",
  };

  return (
    <div className="mb-5">
      <Slider {...settings}>
        {bannerData.map((data) => (
          <div key={data.id} className="banner-container container-fluid ">
            <Row>
              <Col md={6} className="banner-content banner-img ">
                <img src={data.img} alt="" className=" " />
              </Col>
              <Col md={6} className="banner-content banner-content-title">
                <div className="p-5">
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>
                  <button>Shop Now</button>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

{
  /* <div className="banner-container  ">
          <Row>
            <Col md={6} className="banner-content banner-img ">
              <img
                src="https://i.ibb.co/PMv0rYC/studio-shot-cheerful-man-looks-with-amazement-happiness-keeps-hands-chest-dressed-green-sweater.png"
                alt=""
                className=" "
              />
            </Col>
            <Col md={6} className="banner-content banner-content-title">
              <div className="p-5">
                <h1>Spring Sale</h1>
                <p>It’s spring! Put a bounce in your step.</p>
                <button>Shop Now</button>
              </div>
            </Col>
          </Row>
        </div> */
}
