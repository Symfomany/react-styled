import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1.5em;
  color: ${props => props.colorie};
`;

class BeauButton extends Component {
  render() {
    return (
      <div>
        <StyledButton
          className={this.props.show ? "active" : ""}
          onClick={this.props.click}
          colorie={this.props.show ? "red" : "blue"}
        >
          Je suis un boutton {this.props.show && <span>pressé</span>}
        </StyledButton>
      </div>
    );
  }
}

export { BeauButton, StyledButton };
