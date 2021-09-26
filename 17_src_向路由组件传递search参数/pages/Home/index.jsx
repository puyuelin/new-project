import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import MyNavlink from "../../components/MyNavlink";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavlink to="/home/news">News</MyNavlink>
            </li>
            <li>
              <MyNavlink to="/home/message">Message</MyNavlink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
