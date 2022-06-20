import AppRouterFun from "./routers/AppRouter";
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./stores/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
//import { setTextFilter } from "./actions/filter";
import getVisibleExpenses from "./selectors/expenses";
//import expenses from "./reducers/expenses";
import "./firebase/firebase";
const store = configureStore();
//import "./playground/promises";

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expense, state.filters);
//console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouterFun />
  </Provider>
);
const appRoot = document.getElementById("app");
ReactDOM.render(jsx, appRoot);
