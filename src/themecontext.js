import React from "react";

export const kaizentext = {

  lightgraytext: {
    firstparagraph: "I am a Web Development Instructor @ Intec Brussels.",
    scdparagraph: "Explaning in an easy way, requires a deep understanding."
  }
};

const ThemeContext = React.createContext(kaizentext);
export default ThemeContext;
