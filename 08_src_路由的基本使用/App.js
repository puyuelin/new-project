import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
              <Link class="list-group-item" to="/home">
                Home
              </Link>
              <Link class="list-group-item" to="/about">
                About
              </Link>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
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
