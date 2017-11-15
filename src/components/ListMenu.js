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
    return (
      <div style={{ marginTop: "10px" }}>
        <ul style={{ paddingBottom: "40px" }}>
          <li style={styleli}>
            <Link to={`/user/${this.props.user.login}`}>Overview</Link>
          </li>
          <li style={styleli}>
            <Link to={`/repositori/${this.props.user.login}`}>Repositori</Link>
            <span
              className="badge badge-secondary"
              style={{ marginLeft: "5px" }}
            >
              {this.props.user.public_repos}
            </span>
          </li>
          <li style={styleli}>Star</li>
          <li style={styleli}>
            Followers
            <span
              className="badge badge-secondary"
              style={{ marginLeft: "5px" }}
            >
              {this.props.user.followers}
            </span>
          </li>
          <li style={styleli}>
            Following
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
