import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sonplay from "./pages/Sonplay/Sonplay";
export const Appdiv = styled.div`
  width: 100%;
  height: 100%;
`;
class App extends Component {
  render() {
    return (
      <Appdiv>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/sonplay" component={Sonplay}></Route>
          </Switch>
        </BrowserRouter>
      </Appdiv>
    );
  }
}

export default App;
