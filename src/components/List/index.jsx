import React, { Component } from 'react';
import './index.css'

class List extends Component {
  render() {
    return (
      <div>
        <ul className="todo-main">
          <li>
            <label>
              <input type="checkbox" />
              <span>xxxxx</span>
            </label>
            <button className="btn btn-danger" style={{ display: 'none' }}>删除</button>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>yyyy</span>
            </label>
            <button className="btn btn-danger" style={{ display: 'none' }}>删除</button>
          </li>
        </ul>

      </div>
    );
  }
}

export default List;