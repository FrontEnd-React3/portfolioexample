import React, { useContext } from "react";
import "./App.css";
import "sal.js/dist/sal.css";
import "./Tooltip.css";
import aps from "./appsCL.jpeg";
import klas from "./klas.png";
import ThemeContext from "./themecontext";
import kzw from "./kzw.png";

const Kaizen = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
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
            {JSON.stringify(theme.firstparagraph)} <br />
            {JSON.stringify(theme.scdparagraph)}<br />
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
            className="App__secondbackground, About__hiimgapp"
            data-sal-repeat
            data-sal-threshold="0.1"
            data-sal-easing="ease-OutElastic"
            data-sal-delay="2200"
            data-sal-duration="2000"
            data-sal="flip-left"
            data-sal-once="false"
            src={aps}
            alt="app"
          />
        </div>
      </div>
    </div>
  );
};

export default Kaizen;
