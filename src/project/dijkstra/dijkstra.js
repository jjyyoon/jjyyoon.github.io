import React from "react";

import introduction from "./assets/introduction.svg";
import settings from "./assets/settings.svg";
import changeNodeSettings from "./assets/change-node-settings.svg";
import showResult from "./assets/show-result.svg";
import differentResult from "./assets/different-result.svg";

export const dijkstra = {
  introduction: {
    img: <img src={introduction} className="d-block" alt="Introduction" />,
    heading: "Introduction",
    captions: [
      "This project is built with React and is custom-designed with Tailwind CSS.",
      "Redux and Redux Thunk are used to easily manage state that contains data about graph and result."
    ]
  },
  settings: {
    img: <img src={settings} className="d-block" alt="Introduction" />,
    heading: "Set Your Own Distances/Use Real Distances",
    captions: [
      "A graph is generated automatically and users can get a new graph whenever they refresh the page.",
      "There are two ways to set distances. If ‘Use real distances’ is selected, the coordinates of nodes(points) will be shown."
    ]
  },
  changeNodeSettings: {
    img: <img src={changeNodeSettings} className="d-block" alt="Introduction" />,
    heading: "Change Node Settings",
    captions: [
      "Users can change the relationship between two nodes and it creates or removes a path.",
      "They can also change the distance but in ‘Use real distances’ mode, the only way to change distances is drag and drop."
    ]
  },
  showResult: {
    img: <img src={showResult} className="d-block" alt="Introduction" />,
    heading: "Find the Shortest Path",
    captions: [
      "When a user select source and target nodes and click ‘Find’ button, the shortest path between the two nodes will be described and animated."
    ]
  },
  differentResult: {
    img: <img src={differentResult} className="d-block" alt="Introduction" />,
    heading: "Find the Same Path in a Different Mode",
    captions: ["If you find the same path in a different mode, it might show a different result.  "]
  }
};
