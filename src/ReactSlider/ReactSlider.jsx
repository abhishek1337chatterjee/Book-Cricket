import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./ReactSlider.module.css";

export const Reactslider = ({ Team, handleClick, team }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.FlagMain}>
      <Slider {...settings}>
        {Team.map((ele) => (
          <div style={{ margin: "auto" }}>
            <img
              style={{ width: "400px", height: "250px" }}
              onClick={() => handleClick(ele)}
              src={ele.img}
              alt=""
            />
          </div>
        ))}
      </Slider>
      {team != "" ? <h1>{team}</h1> : <h1>Please select your team</h1>}
    </div>
  );
};
