import axios from "axios";
import {
  USER,
  ERR_USER,
  USER_REPO,
  RES_USER,
  USER_FOLLOWERS,
  USER_FOLLOWING
} from "./constants";

const ROOT_URL = "https://api.github.com/users";

export const fetchUserFollowers = username => {
  const request = axios.get(`${ROOT_URL}/${username}/followers`);

  return function(dispatch) {
    dispatch({
      type: USER
    });

    return request
      .then(response => {
        dispatch({
          type: USER_FOLLOWERS,
          payload: response
        });
      })
      .catch(err => {
        dispatch({
          type: ERR_USER,
          payload: err
        });
      });
  };
};

export const fetchUserFollowing = username => {
  const request = axios.get(`${ROOT_URL}/${username}/following`);

  return function(dispatch) {
    dispatch({
      type: USER
    });

    return request
      .then(response => {
        dispatch({
          type: USER_FOLLOWING,
          payload: response
        });
      })
      .catch(err => {
        dispatch({
          type: ERR_USER,
          payload: err
        });
      });
  };
};

export const fetchUserRepos = username => {
  const request = axios.get(`${ROOT_URL}/${username}/repos`);

  return function(dispatch) {
    dispatch({
      type: USER
    });

    return request
      .then(response => {
        dispatch({
          type: USER_REPO,
          payload: response
        });
      })
      .catch(err => {
        dispatch({
          type: ERR_USER,
          payload: err
        });
      });
  };
};

export const fetchUser = username => {
  const request = axios.get(`${ROOT_URL}/${username}`);

  return function(dispatch) {
    dispatch({
      type: USER
    });

    return request
      .then(response => {
        dispatch({
          type: RES_USER,
          payload: response
        });
      })
      .catch(err => {
        dispatch({
          type: ERR_USER,
          payload: err
        });
      });
  };
};
