import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { ticTacToe } from "../../project/tic-tac-toe/tic-tac-toe";
import { eCommerce } from "../../project/e-commerce/e-commerce";
import "./slideshow.styles.scss";

const projects = { tictactoe: ticTacToe, ecommerce: eCommerce };

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const { projectName } = useParams();

  useEffect(() => {
    setIndex(0);
  }, [projectName]);

  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);

  const slides = projects[projectName];
  const slideList = Object.keys(slides);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="main-item">
      {slideList.map((slide, sIdx) => {
        const { img, heading, captions } = slides[slide];

        return (
          <Carousel.Item key={sIdx}>
            {img}
            <Carousel.Caption>
              <h5>{heading}</h5>
              {captions.map((caption, cIdx) => (
                <li key={cIdx}>{caption}</li>
              ))}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slideshow;
