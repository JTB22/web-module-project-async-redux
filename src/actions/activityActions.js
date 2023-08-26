import axios from "axios";

export const FETCH_ACTIVITY = "FETCH_ACTIVITY";
export const TOGGLE_FETCHING = "TOGGLE_FETCHING";

export const toggleFetching = () => (dispatch) => {
  dispatch({ type: TOGGLE_FETCHING });
};

export const fetchActivity = () => (dispatch) => {
  dispatch(toggleFetching());
  axios
    .get("https://www.boredapi.com/api/activity/")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_ACTIVITY, payload: res.data });
    })
    .catch((err) => console.log(err));
};
