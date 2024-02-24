//use this variable to create the redux store.
//the initial data of the redux store should be {counter: 10}
// store.js
import {legacy_createStore} from "redux";
import { reducer } from "./reducer";

const initialState = {
  counter: 10,
};

const store = legacy_createStore(reducer, initialState);

export { store };
