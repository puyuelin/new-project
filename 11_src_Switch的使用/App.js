import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import MyNavlink from "./components/MyNavlink";

import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavlink to="/home">Home</MyNavlink>
              <MyNavlink to="/about">About</MyNavlink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/home" component={Test} />
                  <Route path="/about" component={About} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
