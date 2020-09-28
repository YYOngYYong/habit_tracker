import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncrease = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrease = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul className="habits">
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrease}
              onDecrement={this.handleDecrease}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habit-reset" onClick={this.props.onReset}>
          reset
        </button>
      </>
    );
  }
}

export default Habits;
