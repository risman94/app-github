import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink
              to={`/user/${this.props.user.login}`}
              style={link}
              className="link"
              activeClassName="active"
            >
              Overview
            </NavLink>
          </li>
          <li style={styleli}>
            <NavLink
              to={`/repositori/${this.props.user.login}`}
              style={link}
              className="link"
              activeClassName="active"
            >
              Repositori
              <span
                className="badge badge-secondary"
                style={{ marginLeft: "5px" }}
              >
                {this.props.user.public_repos}
              </span>
            </NavLink>
          </li>
          <li style={styleli} className="nav-link disabled">
            Star
          </li>
          <li style={styleli}>
            <NavLink
              to={`/followers/${this.props.user.login}`}
              style={link}
              className="link"
              activeClassName="active"
            >
              Followers
              <span
                className="badge badge-secondary"
                style={{ marginLeft: "5px" }}
              >
                {this.props.user.followers}
              </span>
            </NavLink>
          </li>
          <li style={styleli}>
            <NavLink
              to={`/following/${this.props.user.login}`}
              style={link}
              className="link"
              activeClassName="active"
            >
              Following
              <span
                className="badge badge-secondary"
                style={{ marginLeft: "5px" }}
              >
                {this.props.user.following}
              </span>
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default ListMenu;
