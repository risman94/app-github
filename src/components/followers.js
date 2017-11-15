import React, { Component } from "react";
import { connect } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { fetchUserFollowers, fetchUser } from "../actions/userAction";
import ListMenu from "./ListMenu";

class Followers extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
    this.props.fetchUserFollowers(this.props.match.params.username);
  }
  onNavigateHome() {
    const history = createHistory;
    this.props.history.push("/");
  }
  render() {
    console.log(this.props.user, "user");
    console.log(this.props.followers, "followers");
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
            {this.props.followers.map((node, index) => (
              <div key={index}>{node.login}</div>
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
    followers: state.userDetails.followers
  };
}

export default connect(mapStateToProps, { fetchUserFollowers, fetchUser })(
  Followers
);
