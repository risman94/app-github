import { USER, ERR_USER, USER_REPO, RES_USER } from "../actions/constants";
const INTIAL_STATE = {
  user: [],
  repos: [],
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
