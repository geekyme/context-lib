import React from "react";
import Context from "./Context";

export default class Consumer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "world"
    };
  }

  render() {
    return (
      <Context.Consumer>
        {value => `Context value: ${JSON.stringify(value)}`}
      </Context.Consumer>
    );
  }
}
