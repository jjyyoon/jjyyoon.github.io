import React from "react";
import { Switch, Route } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import Menu from "./components/menu/menu.component";
import Intro from "./components/intro/intro.component";
import Slideshow from "./components/slideshow/slideshow.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Row>
        <Menu />
        <Col className="main">
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/project/:projectName" render={() => <Slideshow />} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default App;
