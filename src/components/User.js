import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserRepos, fetchUser } from "../actions/userAction";
import ListMenu from "./ListMenu";
import Repo from "./Repo";

class UserDetails extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
    this.props.fetchUserRepos(this.props.match.params.username);
  }
  render() {
    console.log(this.props.user, "user");
    console.log(this.props.repos, "repos");
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              src={this.props.user.avatar_url}
              className="img-thumbnail"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            />
            <h3>{this.props.user.name}</h3>
            <p className="text-muted">{this.props.match.params.username}</p>
            <p className="text-muted">{this.props.user.bio}</p>
            <hr />
            <p>
              <i
                className="fa fa-users"
                aria-hidden="true"
                style={{ padding: "5px" }}
              />
              {this.props.user.company}
            </p>
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
              <a href={this.props.user.blog}>{this.props.user.blog}</a>
            </p>
          </div>
          <div className="col-md-9">
            <ListMenu user={this.props.user} />
            <Repo />
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
