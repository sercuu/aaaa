import React, { Component } from "react";
import { connect } from "react-redux";
import fetchCategory from "../actions/";

class Home extends Component {
  render() {
    console.log(this.props.fetchCategory);

    return (
      <div>
        <h1>Silver Rail</h1>
        <p />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCategory
};

export default connect(null, mapDispatchToProps)(Home);
