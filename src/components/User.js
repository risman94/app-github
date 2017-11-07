import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserRepos, fetchUser } from "../actions/userAction";

class UserDetails extends Component {
  componentDidMount() {
    this.props.fetchUser("risman94");
    this.props.fetchUserRepos("risman94");
  }
  render() {
    console.log(this.props.user, "user");
    console.log(this.props.repos, "repos");
    return (
      <div className="container">
        <p>coba tes saja</p>
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
