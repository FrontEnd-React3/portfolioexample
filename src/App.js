import React, { useState, useEffect } from "react";
import sal from "sal.js";
import "./App.css";
import "sal.js/dist/sal.css";
import "./Tooltip.css";
import bene from "./benedikt.png";
import aps from "./appsCL.jpeg";
import klas from "./klas.png";
import kz from "./kz.png";
import kzw from "./kzw.png";
import mail from "./mail.svg";
import phone from "./phone.svg";
import file from "./file.svg";
import online from "./online.svg";
import { motion } from "framer-motion";

const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const image3 = "src: /kz.png";
const inlineStyle = {
  left: "50%",
  padding: "20px",
  transform: "translate(-50%, -50%)"
};

export default function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(sal, []);
  return (
    <div className="App">
      <div className="App__background">
        <div className="App__navbackground App__centerflex">
          <img className="App__navsvg" src={online} alt="online" />

        </div>

        <div className="App__centerflex">
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: "50",
              duration: "1",
              delay: "0.5"
            }}
            className="App__firstbackground"
          >
            <div className="Intro__cont">
              <div className="Intro__title App__centerflex"> Howdy!</div>{" "}
              <div className="Intro__textcont">
                Thanks so much for getting here! <br />
                I’m Benedikt, web-developer and graphic designer. <br />
                I’d really love to get in touch with you to hear your feedback{" "}
                <br />
                or just say hello! 😃
                <br />
                <div className="Intro__footer">
                  {" "}
                  You can reach me on...
                </div>{" "}
              </div>
              <div className="Intro__iconcont">
                <span className="mailIcon" data-tooltip="B.Lantsoght@gmail.com">
                  <motion.img
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: "500",
                      duration: "1",
                      delay: "1.2"
                    }}
                    className="Intro__mail"
                    src={mail}
                    alt="mail"
                  />
                </span>
                <span className="phoneIcon" data-tooltip="+32 499 388 227">
                  <motion.img
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: "500",
                      duration: "1",
                      delay: "1.6"
                    }}
                    className="Intro__mail"
                    src={phone}
                    alt="phone"
                  />{" "}
                </span>
                <span className="cvIcon" data-tooltip="+32 499 388 22">
                  <motion.img
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: "500",
                      duration: "1",
                      delay: "2.0"
                    }}
                    className="Intro__mail"
                    src={file}
                    alt="mail"
                  />
                </span>
              </div>
            </div>
            <div className="App__endflex">
              <img className="App__hiimg" src={bene} alt="bne" />
            </div>
          </motion.div>
          <div className="App__secondbackground">
            {" "}
            <img
              style={{ transform: `translateY(${offsetY * -0.9}px)` }}
              className="PRL__parallax"
              id="PRL__leftone"
              src={kz}
              alt="kz"
            />{" "}
            <img
              style={{ transform: `translateY(${offsetY * -3}px)` }}
              className="PRL__parallax"
              id="PRL__lefttwo"
              src={kz}
              alt="kz"
            />{" "}
            <img
              style={{ transform: `translateY(${offsetY * -9.2}px)` }}
              className="PRL__parallax"
              id="PRL__leftthree"
              src={kz}
              alt="kz"
            />{" "}
            <img
              style={{ transform: `translateY(${offsetY * -2.6}px)` }}
              className="PRL__parallax"
              id="PRL__leftfour"
              src={kz}
              alt="kz"
            />{" "}
            <div
              className="About__imgwrap"
              data-sal-repeat
              data-sal-threshold="1"
              data-sal-easing="ease-OutElastic"
              data-sal-delay="800"
              data-sal-duration="2000"
              data-sal="flip-left"
              data-sal-once="false"
            >
              <div className="About__textcont">
                <img className="About__hiimgklas" src={klas} alt="bne" />
                <div className="About__title  ">Passion</div>
              </div>
              <div className="About__textwrap">
                <div className="About__textinsidewrap">
                  I am a Web Development Instructor @ Intec Brussels.
                  <br />
                  Explaning in an easy way, requires a deep understanding.{" "}
                  <br />
                  Not afraid to step outside my comfort-zone, <br />
                  looking for a constant evolution of my knowledge.
                  <br />
                  <div className="Intro__kzcont">
                    <img className="Intro__kz" src={kzw} alt="" />
                    <div className="Intro__footer" style={{ color: "black" }}>
                      Kaizen, with love...
                    </div>
                  </div>
                </div>
                <img
                  className="App__secondbackground"
                  data-sal-repeat
                  data-sal-threshold="0.1"
                  data-sal-easing="ease-OutElastic"
                  data-sal-delay="2200"
                  data-sal-duration="2000"
                  data-sal="flip-left"
                  data-sal-once="false"
                  className="About__hiimgapp"
                  src={aps}
                  alt="app"
                />
              </div>
            </div>{" "}
          </div>{" "}
          <div className="App__thirdbackground">
            <span
              className="PF__title  "
              data-sal-repeat
              data-sal-easing="ease-OutElastic"
              data-sal-delay="0"
              data-sal-duration="20"
              data-sal="slide-left"
              data-sal-once="false"
            >
              P
            </span>{" "}
            <span
              className="PF__title  "
              data-sal-repeat
              data-sal-easing="ease-OutElastic"
              data-sal-delay="100"
              data-sal-duration="20"
              data-sal="slide-left"
              data-sal-once="false"
            >
              o
            </span>{" "}
            <span
              className="PF__title  "
              data-sal-repeat
              data-sal-threshold="0.1"
              data-sal-easing="ease-OutElastic"
              data-sal-delay="200"
              data-sal-duration="20"
              data-sal="slide-left"
              data-sal-once="false"
            >
              r
            </span>{" "}
            <span
              className="PF__title  "
              data-sal-repeat
              data-sal-threshold="0.01"
              data-sal-easing="ease-OutElastic"
              data-sal-delay="300"
              data-sal-duration="2000"
              data-sal="slide-left"
              data-sal-once="false"
            >
              t
            </span>{" "}
            <span
              className="PF__title  "
              data-sal-repeat
              data-sal-threshold="0.01"
              data-sal-easing="ease-OutElastic"
              data-sal-delay="350"
              data-sal-duration="2000"
              data-sal="slide-left"
              data-sal-once="false"
            >
              f
            </span>{" "}
            <span
              className="PF__title  "
              data-sal-repeat
              data-sal-threshold="0.01"
              data-sal-easing="ease-OutElastic"
              data-sal-delay="400"
              data-sal-duration="2000"
              data-sal="slide-left"
              data-sal-once="false"
            >
              o
            </span>{" "}
            <span
              className="PF__title  "
              data-sal-repeat
              data-sal-threshold="0.01"
              data-sal-easing="ease-OutElastic"
              data-sal-delay="500"
              data-sal-duration="2000"
              data-sal="slide-left"
              data-sal-once="false"
            >
              l
            </span>
            <span
              className="PF__title  "
              data-sal-repeat
              data-sal-threshold="0.01"
              data-sal-easing="ease-OutElastic"
              data-sal-delay="600"
              data-sal-duration="2000"
              data-sal="slide-left"
              data-sal-once="false"
            >
              i
            </span>
            <span
              className="PF__title  "
              data-sal-repeat
              data-sal-threshold="0.01"
              data-sal-easing="ease-OutElastic"
              data-sal-delay="700"
              data-sal-duration="2000"
              data-sal="slide-left"
              data-sal-once="false"
            >
              o
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
