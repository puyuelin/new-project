import React, { Component } from 'react';
import './index.css'

class Item extends Component {
  state = { mouse: false }

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    }
  }

  handleDelete = (id) => {
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(id);
    }
  }

  render() {
    const { name, done, id } = this.props;
    const { mouse } = this.state;
    return (
      <div>
        <li style={{ backgroundColor: mouse ? "#ddd" : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
            <span>{name}</span>
          </label>
          <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? "block" : "none" }}>删除</button>
        </li>
      </div>
    );
  }
}

export default Item;