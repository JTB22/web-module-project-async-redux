import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchActivity } from "./actions/activityActions";

function App(props) {
  return (
    <div className="App">
      <div className="App-logo">
        <img src="https://th.bing.com/th/id/R.44d979661016ae81a19d2ac5540f950d?rik=zl79vEaR6%2fsv5A&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9cp%2f6aA%2f9cp6aApyi.png&ehk=4Jq%2bajEkv%2b6IH697Q16xb74lQ6OZ4S3BVCRMNS8Bh6U%3d&risl=&pid=ImgRaw&r=0" />
      </div>
      <div className="container">
        <div className="col">
          <button onClick={() => props.fetchActivity()}>Find Activity</button>
          <p>{props.activity}</p>
        </div>
        <div className="col">
          <button>To-Do List (Hide)</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
  };
};

export default connect(mapStateToProps, { fetchActivity })(App);
