import React, { Component } from "react";
import { connect } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { fetchUserRepos, fetchUser } from "../actions/userAction";
import ListMenu from "./ListMenu";

class Repositori extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
    this.props.fetchUserRepos(this.props.match.params.username);
  }
  onNavigateHome() {
    const history = createHistory;
    this.props.history.push("/");
  }
  render() {
    console.log(this.props.user, "user");
    console.log(this.props.repos, "repos");
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <button
              onClick={this.onNavigateHome.bind(this)}
              className="btn btn-light"
              style={{
                marginTop: "10px",
                border: "1px solid",
                marginBottom: "10px"
              }}
            >
              ← Back
            </button>
            <img
              src={this.props.user.avatar_url}
              className="img-thumbnail"
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                width: "255px",
                height: "255px"
              }}
            />
            <h3>{this.props.user.name}</h3>
            <p className="text-muted">{this.props.match.params.username}</p>
            <p className="text-muted">{this.props.user.bio}</p>
            <hr />
            {this.props.user.company && (
              <p>
                <i
                  className="fa fa-users"
                  aria-hidden="true"
                  style={{ padding: "5px" }}
                />
                {this.props.user.company.length > 20
                  ? `${this.props.user.company.substring(0, 20)} ...`
                  : this.props.user.company}
              </p>
            )}
            {this.props.user.location && (
              <p>
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ padding: "5px" }}
                />
                {this.props.user.location.length > 30
                  ? `${this.props.user.location.substring(0, 30)} ...`
                  : this.props.user.location}
              </p>
            )}
            {this.props.user.blog && (
              <p>
                <i
                  className="fa fa-link"
                  aria-hidden="true"
                  style={{ padding: "5px" }}
                />
                <a href={this.props.user.blog} target="_blank">
                  {this.props.user.blog.length > 30
                    ? `${this.props.user.blog.substring(0, 30)} ...`
                    : this.props.user.blog}
                </a>
              </p>
            )}
          </div>
          <div className="col-md-9">
            <ListMenu user={this.props.user} />
            {this.props.repos.map((node, index) => (
              <div key={index}>
                <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                  <a href={node.html_url} target="_blank">
                    {node.name}
                  </a>
                </div>
                <div style={{ paddingBottom: "10px", color: "gray" }}>
                  {node.description}
                </div>
                <div>
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
                        // float: "left",
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
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.userDetails.user,
    repos: state.userDetails.repos,
    fetching: state.userDetails.fetching
  };
}

export default connect(mapStateToProps, { fetchUserRepos, fetchUser })(
  Repositori
);
