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
const store = configureStore();
//console.log(dispatcher);
store.dispatch(addExpense({ description: "water bill", amount: 15000 }));
store.dispatch(addExpense({ description: "gas bill", amount: 2010 ,createdAt:105}));
//store.dispatch(addExpense({ description: "hand bill", amount: 2010 ,createdAt:105}));
store.dispatch(addExpense({ description:"rent  bill", amount:1005, createdAt:102}));
//store.dispatch(addExpense({ description:"hello", amount:1005, createdAt:102}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expense, state.filters);
console.log(visibleExpenses);

const jsx = (
 
    <Provider store={store}>
    <AppRouterFun />
  </Provider>

);
const appRoot = document.getElementById("app");
ReactDOM.render(jsx, appRoot);
