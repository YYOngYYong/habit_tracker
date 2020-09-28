import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;

    //input의 value값이 비어있지않다면.
    name && this.props.onAdd(name);

    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="add-input"
          placeholder="텍스트 입력"
          ref={this.inputRef}
        />
        <button>입력</button>
      </form>
    );
  }
}

export default HabitAddForm;
