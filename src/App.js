import React from "react";
import { Switch, Route } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import Menu from "./components/menu/menu.component";
import Intro from "./components/intro/intro.component";
import Slideshow from "./components/slideshow/slideshow.component";
import Dijkstra from "./project/dijkstra/src/App";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/dijkstra">
        <Dijkstra />
      </Route>
      <Route path="/">
        <div className="App">
          <Row>
            <Menu />
            <Col className="main">
              <Route exact path="/">
                <Intro />
              </Route>
              <Route path="/projects/:projectName">
                <Slideshow />
              </Route>
            </Col>
          </Row>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
