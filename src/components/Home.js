import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { search } from "../actions/searchAction";

let timeoutId;
class Home extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => this.props.search(this.input.value), 1000);
  }

  render() {
    const { searchData, fetching } = this.props;

    console.log(searchData, "ini adalah search");
    return (
      <div className="container">
        <FormControl
          type="text"
          placeholder="Enter Github User Name"
          onChange={this.handleChange}
          inputRef={ref => {
            this.input = ref;
          }}
        />
        {fetching && <div className="loading"> Loading.. </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchData: state.search.all,
    fetching: state.search.fetching
  };
}

export default connect(mapStateToProps, { search })(Home);
