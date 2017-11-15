import {
  USER,
  ERR_USER,
  USER_REPO,
  RES_USER,
  USER_FOLLOWERS,
  USER_FOLLOWING
} from "../actions/constants";

const INTIAL_STATE = {
  user: [],
  repos: [],
  followers: [],
  following: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function(state = INTIAL_STATE, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        fetching: true
      };
    case USER_REPO:
      return {
        ...state,
        fetching: false,
        fetched: true,
        repos: action.payload.data
      };
    case RES_USER:
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload.data
      };
    case USER_FOLLOWERS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        followers: action.payload.data
      };
    case USER_FOLLOWING:
      return {
        ...state,
        fetching: false,
        fetched: true,
        following: action.payload.data
      };
    case ERR_USER:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
