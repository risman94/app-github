import React, { Component } from "react";
import { FormControl, Image, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { search } from "../actions/searchAction";
import { Link } from "react-router-dom";
import "./../style.css";

let timeoutId;
class Search extends Component {
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
      <div className="container" style={{ paddingTop: "10px" }}>
        <h2>
          <Image
            src="./../assets/github.png"
            style={{ height: "80px", width: "80px" }}
            circle
          />
          Github Users Search
        </h2>
        <FormControl
          type="text"
          placeholder="Enter Github User Name"
          onChange={this.handleChange}
          inputRef={ref => {
            this.input = ref;
          }}
        />
        <div
          className="row"
          style={{
            marginTop: "30px",
            marginBottom: "30px"
          }}
        >
          <div className="col-md-5" />
          {fetching && <div className="col-md-1 loaders" />}
          <div className="col-md-5" />
        </div>
        <Row className="show-grid" style={{ marginTop: "40px" }}>
          {searchData.items &&
            searchData.items.map((result, key) => (
              <Col sm={3} md={3} key={key} style={{ marginBottom: "40px" }}>
                <Link to={`user/${result.login}`}>
                  <Image
                    src={result.avatar_url}
                    style={{ width: "255px", height: "255px" }}
                    thumbnail
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "18px",
                      fontWeight: "bold"
                    }}
                  >
                    {result.login}
                  </div>
                </Link>
              </Col>
            ))}
        </Row>
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

export default connect(mapStateToProps, { search })(Search);
