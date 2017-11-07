import { SEARCH, RES_SEARCH, ERR_SEARCH } from "../actions/constants";

const initialState = {
  all: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        fetching: true
      };
    case RES_SEARCH:
      return {
        ...state,
        fetching: false,
        fetched: true,
        all: action.payload.data
      };
    case ERR_SEARCH:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
