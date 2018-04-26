import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BeauButton, StyledButton } from "./BeauButton";
import styled from "styled-components";

const TomatoButton = StyledButton.extend`
  color: tomato;
  border-color: tomato;
  padding: 20px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.check = this.check.bind(this);
  }

  check() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcomes to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BeauButton show={this.state.show} click={this.check} />
        <BeauButton show={this.state.show} click={this.check} />
        <TomatoButton show={this.state.show} click={this.check} />
      </div>
    );
  }
}

export default App;
