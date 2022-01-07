import { Component } from "react";
import "../App.css";
import FinalDiv from "./FinalDiv";

export default class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {};
  }

  handleClick = () => {
    console.log(FinalDiv)
    return <FinalDiv />;
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}
