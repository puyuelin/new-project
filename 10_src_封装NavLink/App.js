import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import Header from "./components/Header";
import MyNavlink from "./components/MyNavlink";

import Home from "./pages/Home";
import About from "./pages/About";

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
              <MyNavlink to="/home" >Home</MyNavlink>
              <MyNavlink to="/about" >About</MyNavlink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
