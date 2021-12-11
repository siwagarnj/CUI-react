import React, { Component } from "react";

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = props.onChange;
  }
  render() {
    return (
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        onChange={(e) => this.onChange(e.target.value)}
        value={this.props.value}
        placeholder={this.props.placeholder}
      />
    );
  }
}
