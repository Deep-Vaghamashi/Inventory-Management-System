import React from 'react';
import Slider from 'react-slick';
import { useState,useEffect } from "react";
import { useParams} from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
  
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [data,setData]=useState({});
  const {name} = useParams();

    useEffect(()=>{
      const apiUrl = 'http://localhost:5005/'+name;
      fetch(apiUrl, {method:"GET"})
      .then(res=>res.json())
      .then(res=>setData(res));
    },[name]);


  return (
    <Slider {...settings}>
      <img src={data.ProductImg} alt="" className="d-inline-block align-text-top"/>
      <img src={data.Img_2} alt="" className="d-inline-block align-text-top"/>
      <img src={data.Img_3} alt="" className="d-inline-block align-text-top"/>
    </Slider>
  );
};

export default Carousel;