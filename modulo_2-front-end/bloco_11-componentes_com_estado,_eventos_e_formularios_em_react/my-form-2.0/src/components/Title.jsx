import { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";

export default class Title extends Component {
  render() {
    const { title } = this.props;

    return <h1 className='title'>{title}</h1>;
  }
}
