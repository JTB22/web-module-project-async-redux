import { FETCH_ACTIVITY, TOGGLE_FETCHING } from "../actions/activityActions";

const initialState = {
  activity: [],
  isFetching: false,
};

export const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
        isFetching: false,
      };
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    default:
      return state;
  }
};
