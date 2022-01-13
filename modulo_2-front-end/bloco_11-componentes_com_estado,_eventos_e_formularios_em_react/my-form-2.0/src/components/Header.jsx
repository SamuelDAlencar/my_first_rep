import { Component } from "react";
import "../App.css";
import Title from "./Title";

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Title title="Título" />
      </header>
    );
  }
}
