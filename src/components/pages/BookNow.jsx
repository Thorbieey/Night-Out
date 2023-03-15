import React from "react";
import Banner from "../../assets/images/banner.png";

export default function BookNow() {
  return (
    <div >
        <img src={Banner} className="banner" alt="raised hands in a night club"/>
        <h1>
        Where would you like your night out to be?
        </h1>
    </div>
    );
}