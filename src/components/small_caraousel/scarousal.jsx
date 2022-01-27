import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
const scarousal =(props)=> {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div className="scarousal" >
        <h2> {props.name} </h2>
        <Slider {...settings}>
          <div >
            <img src="https://picsum.photos/seed/picsum/300/200" />
          </div>
          <div >
            <img src="https://picsum.photos/seed/picsum/300/200" />
          </div>
          <div >
            <img src="https://picsum.photos/seed/picsum/300/200" />
          </div>
          <div >
            <img src="https://picsum.photos/seed/picsum/300/200" />
          </div>
          <div >
            <img src="https://picsum.photos/seed/picsum/300/200" />
          </div>
          <div >
            <img src="https://picsum.photos/seed/picsum/300/200" />
          </div>
        </Slider>
      </div>
    );
  }

export default scarousal;