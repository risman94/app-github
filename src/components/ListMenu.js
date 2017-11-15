import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListMenu extends Component {
  render() {
    var styleli = {
      float: "left",
      display: "block",
      paddingRight: "50px",
      paddingTop: "10px"
    };
    var link = {
      color: "black",
      textDecoration: "none"
    };
    return (
      <div style={{ marginTop: "10px" }}>
        <ul style={{ paddingBottom: "40px" }}>
          <li style={styleli}>
            <Link
              to={`/user/${this.props.user.login}`}
              style={link}
              className="link"
            >
              Overview
            </Link>
          </li>
          <li style={styleli}>
            <Link
              to={`/repositori/${this.props.user.login}`}
              style={link}
              className="link"
            >
              Repositori
            </Link>
            <span
              className="badge badge-secondary"
              style={{ marginLeft: "5px" }}
            >
              {this.props.user.public_repos}
            </span>
          </li>
          <li style={styleli} className="nav-link disabled">
            Star
          </li>
          <li style={styleli}>
            <Link
              to={`/followers/${this.props.user.login}`}
              style={link}
              className="link"
            >
              Followers
            </Link>
            <span
              className="badge badge-secondary"
              style={{ marginLeft: "5px" }}
            >
              {this.props.user.followers}
            </span>
          </li>
          <li style={styleli}>
            <Link
              to={`/following/${this.props.user.login}`}
              style={link}
              className="link"
            >
              Following
            </Link>
            <span
              className="badge badge-secondary"
              style={{ marginLeft: "5px" }}
            >
              {this.props.user.following}
            </span>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default ListMenu;
