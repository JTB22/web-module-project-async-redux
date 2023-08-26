import { FETCH_ACTIVITY } from "../actions/activityActions";

const initialState = {
  activity: "",
  key: Date.now(),
};

export const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITY:
      return {
        ...state,
        activity: action.payload.activity,
        key: action.payload.key,
      };
    default:
      return state;
  }
};
