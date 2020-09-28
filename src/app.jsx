import React, { Component } from "react";
import Habits from "./components/habits";
import "./app.css";
import Navbar from "./navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Running", count: 0 },
      { id: 2, name: "Coding", count: 0 },
      { id: 3, name: "Leading", count: 0 },
    ],
  };
  handleIncrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  handleDecrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    const reset = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ reset });
  };
  render() {
    return (
      <>
        <Navbar
          count={this.state.habits.filter((item) => item.count > 0).length}
        />

        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrease}
          onDecrement={this.handleDecrease}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
