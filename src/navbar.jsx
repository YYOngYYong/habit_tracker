import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <i className="fas fa-leaf"></i>
        </div>
        <h1 className="title">Habit Tracker</h1>
        <span className="total-count">{this.props.count}</span>
      </nav>
    );
  }
}

export default Navbar;
