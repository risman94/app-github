import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserRepos } from "../actions/userAction";

class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleRepo: false
    };
  }

  handleClick() {
    this.setState({
      toggleRepo: !this.state.toggleRepo
    });
  }

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <div>Pinned repositories </div>
        {!this.state.toggleRepo ? (
          <div className="row justify-content-between">
            {this.props.repos.slice(-6).map((node, index) => (
              <div key={index} className="col-md-6">
                <div
                  className="card"
                  style={{ padding: "10px", margin: "5px", height: "150px" }}
                >
                  <div className="card-title">
                    <a
                      href={node.html_url}
                      style={{ fontWeight: "bold" }}
                      target="_blank"
                    >
                      {node.name}
                    </a>
                  </div>
                  <div
                    className="card-body"
                    style={{ fontSize: "13px", padding: "0px" }}
                  >
                    {node.description && node.description.length > 100
                      ? `${node.description.substring(0, 100)} ...`
                      : node.description}
                  </div>
                  <div className="card-text" style={{ fontSize: "14px" }}>
                    <ul style={{ paddingLeft: "0px" }}>
                      <li
                        style={{
                          float: "left",
                          display: "block",
                          paddingRight: "10px"
                        }}
                      >
                        {node.language}
                      </li>
                      <li
                        style={{
                          float: "left",
                          display: "block",
                          paddingRight: "10px"
                        }}
                      >
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ paddingRight: "3px" }}
                        />
                        {node.stargazers_count}
                      </li>
                      <li
                        style={{
                          float: "left",
                          display: "block",
                          paddingRight: "10px"
                        }}
                      >
                        <i
                          className="fa fa-code-fork"
                          aria-hidden="true"
                          style={{ paddingRight: "3px" }}
                        />
                        {node.forks_count}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row justify-content-between">
            {this.props.repos.map((node, index) => (
              <div key={index} className="col-md-6">
                <div
                  className="card"
                  style={{ padding: "10px", margin: "5px", height: "150px" }}
                >
                  <div className="card-title">
                    <a
                      href={node.html_url}
                      style={{ fontWeight: "bold" }}
                      target="_blank"
                    >
                      {node.name}
                    </a>
                  </div>
                  <div
                    className="card-body"
                    style={{ fontSize: "13px", padding: "0px" }}
                  >
                    {node.description && node.description.length > 150
                      ? `${node.description.substring(0, 150)} ...`
                      : node.description}
                  </div>
                  <div className="card-text" style={{ fontSize: "14px" }}>
                    <ul style={{ paddingLeft: "0px" }}>
                      <li
                        style={{
                          float: "left",
                          display: "block",
                          paddingRight: "10px"
                        }}
                      >
                        {node.language}
                      </li>
                      <li
                        style={{
                          float: "left",
                          display: "block",
                          paddingRight: "10px"
                        }}
                      >
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ paddingRight: "3px" }}
                        />
                        {node.stargazers_count}
                      </li>
                      <li
                        style={{
                          float: "left",
                          display: "block",
                          paddingRight: "10px"
                        }}
                      >
                        <i
                          className="fa fa-code-fork"
                          aria-hidden="true"
                          style={{ paddingRight: "3px" }}
                        />
                        {node.forks_count}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div style={{ textAlign: "center" }}>
          <button
            className="btn btn-light"
            onClick={this.handleClick.bind(this)}
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              border: "1px solid"
            }}
          >
            {!this.state.toggleRepo ? "show more repo" : "Hide"}
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    repos: state.userDetails.repos
  };
}

export default connect(mapStateToProps, { fetchUserRepos })(Repo);
