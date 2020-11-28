import React, { useState, useEffect } from "react";
import "./App.css";
import "sal.js/dist/sal.css";
import "./Tooltip.css";
import kz from "./kz.png";

function PRL() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="parallaxcont">
        <img
          style={{ transform: `translateY(${offsetY * -0.9}px)` }}
          className="PRL__parallax"
          id="PRL__leftone"
          src={kz}
          alt="kz"
        />
        <img
          style={{ transform: `translateY(${offsetY * -3}px)` }}
          className="PRL__parallax"
          id="PRL__lefttwo"
          src={kz}
          alt="kz"
        />
        <img
          style={{ transform: `translateY(${offsetY * -9.2}px)` }}
          className="PRL__parallax"
          id="PRL__leftthree"
          src={kz}
          alt="kz"
        />
        <img
          style={{ transform: `translateY(${offsetY * -2.6}px)` }}
          className="PRL__parallax"
          id="PRL__leftfour"
          src={kz}
          alt="kz"
        />
      </div>
    </div>
  );
}

export default PRL;
