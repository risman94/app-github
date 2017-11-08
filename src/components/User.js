import React, { Component } from "react";
import { connect } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { fetchUserRepos, fetchUser } from "../actions/userAction";
import ListMenu from "./ListMenu";
import Repo from "./Repo";
import Contribution from "./Contribution";

class UserDetails extends Component {
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
              style={{ marginTop: "10px", marginBottom: "10px" }}
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
                {this.props.user.company}
              </p>
            )}
            <p>
              <i
                className="fa fa-map-marker"
                aria-hidden="true"
                style={{ padding: "5px" }}
              />
              {this.props.user.location}
            </p>
            <p>
              <i
                className="fa fa-link"
                aria-hidden="true"
                style={{ padding: "5px" }}
              />
              <a href={this.props.user.blog} target="_blank">
                {this.props.user.blog}
              </a>
            </p>
          </div>
          <div className="col-md-9">
            <ListMenu user={this.props.user} />
            <Repo />
            <Contribution />
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
  UserDetails
);
