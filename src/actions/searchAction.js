import axios from "axios";
import { SEARCH, RES_SEARCH, ERR_SEARCH } from "./constants";

const ROOT_URL = "https://api.github.com/search/users";

export const search = username => {
  const request = axios.get(`${ROOT_URL}?q=${username}`);

  return function(dispatch) {
    dispatch({
      type: SEARCH
    });

    return request
      .then(res => {
        dispatch({
          type: RES_SEARCH,
          payload: res
        });
      })
      .catch(err => {
        dispatch({
          type: ERR_SEARCH,
          payload: err
        });
      });
  };
};
