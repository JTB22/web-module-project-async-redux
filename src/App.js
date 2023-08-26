import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchActivity } from "./actions/activityActions";
import { addTodo, toggleTodo, removeTodo } from "./actions/toDoActions";

function App(props) {
  return (
    <div className="App">
      <div className="App-logo">
        <img src="https://th.bing.com/th/id/R.44d979661016ae81a19d2ac5540f950d?rik=zl79vEaR6%2fsv5A&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9cp%2f6aA%2f9cp6aApyi.png&ehk=4Jq%2bajEkv%2b6IH697Q16xb74lQ6OZ4S3BVCRMNS8Bh6U%3d&risl=&pid=ImgRaw&r=0" />
      </div>
      <div className="container">
        <div className="col">
          {props.isFetching ? (
            <button disabled>Fetching...</button>
          ) : (
            <button onClick={() => props.fetchActivity()}>Find Activity</button>
          )}
          {props.activity.length === 0 ? (
            <p>Start by clicking the button!</p>
          ) : (
            <p key={props.activity.key}>
              {props.activity.activity}
              <span onClick={() => props.addTodo(props.activity)}>
                &#x2714;
              </span>
            </p>
          )}
        </div>
        <div className="col">
          <button onClick={() => props.toggleTodo()}>
            To-Do List {props.isHidden ? "(Show)" : "(Hide)"}
          </button>
          {props.isHidden || props.todos.length === 0 ? null : (
            <ul>
              {props.todos.map((todo) => (
                <li key={todo.key}>
                  {todo.activity}
                  <span onClick={() => props.removeTodo(todo.key)}>
                    &#x2718;
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activity: state.a.activity,
    isFetching: state.a.isFetching,
    todos: state.b.toDos,
    isHidden: state.b.isHidden,
  };
};

export default connect(mapStateToProps, {
  fetchActivity,
  addTodo,
  toggleTodo,
  removeTodo,
})(App);
