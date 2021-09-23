import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

export default class Search extends Component {
  search = async () => {
    const {
      keyWordElement: { value: keyWord },
    } = this;
    PubSub.publish("atguigu", { isFirst: false, isLoading: true });

    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`);
      const data = await response.json();
      PubSub.publish("atguigu", { isLoading: false, users: data.items });
    } catch (error) {
      PubSub.publish("atguigu", { isLoading: false, err: error.message });
    }
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
