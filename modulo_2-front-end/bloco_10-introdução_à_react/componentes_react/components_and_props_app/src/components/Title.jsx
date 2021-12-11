import { Component } from "react";
import PropTypes from "prop-types";

export default class Title extends Component {
  render() {
    const { TitleName } = this.props;
    console.log(TitleName)
    return (
      <>
        <h1>{TitleName}</h1>
      </>
    );
  }
}

Title.propTypes = {
  TitleName: PropTypes.string.isRequired
}