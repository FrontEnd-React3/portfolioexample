import React from "react";
import "./App.css";
import "sal.js/dist/sal.css";
import "./Tooltip.css";
import bene from "./benedikt.png";
import mail from "./mail.svg";
import phone from "./phone.svg";
import file from "./file.svg";
import { motion } from "framer-motion";
function Intro() {
  return (
    <div>
      <div className="Intro__cont">
        <div className="Intro__title App__centerflex"> Howdy!</div>{" "}
        <div className="Intro__textcont">
          Thanks so much for getting here! <br />
          I’m Benedikt, web-developer and graphic designer. <br />
          I’d really love to get in touch with you to hear your feedback <br />
          or just say hello! 😃
          <br />
          <div className="Intro__footer"> You can reach me on...</div>{" "}
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
          <span className="phoneIcon" data-tooltip="+32 (0)499 388 227">
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
          <span className="cvIcon" data-tooltip="CV NL/FR">
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
    </div>
  );
}

export default Intro;
