import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStatetoProps = (state) => {
  return {
    expenses: selectExpenses(state.expense, state.filters),
  };
};

export default connect(mapStatetoProps)(ExpenseList);