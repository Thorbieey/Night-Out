import React from "react";
import Location  from "../content/Location";

export default function BookNow() {
  return (
    
      <div className="w-full h-full bg-no-repeat bg-cover"> 
      <div style={{
        width: '1500px',
        height: '500px',
        backgroundSize:'cover',
        backgroundImage: 'url(" /assets/images/background-images/Band4.png")'
        }}>
      </div>
       <Location/>
    </div>
    );
}