import { CountReducer } from "../reducers/CountReducer";
import { TodoReducer } from "../reducers/TodoReducer";
import { combineReducers, createStore } from "redux";

const AllReducers= combineReducers (
  {
    counter: CountReducer,
  Todos: TodoReducer,
  }
)

const store= createStore(AllReducers)
export default store