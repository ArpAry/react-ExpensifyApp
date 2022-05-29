
import React from 'react';
import { connect, } from 'react-redux';
import ExpenseFormPage from './ExpenseFormpage';
import { addExpense } from '../actions/expenses';
import { useNavigate } from "react-router-dom";


const ExpensifyAdd = (props) => {
  const navigate = useNavigate();
  return(
  <div>

  
    <h1>Add Expense</h1>
    <ExpenseFormPage
      onSubmit={(expense) => {
        if (expense.description && expense.Amount) {
          props.dispatch(addExpense(expense));
          navigate('/');
      }
      
      }}
    />
  </div>
)};

export default connect()(ExpensifyAdd);
//  props.dispatch(addExpense(expense));
//useNavigate('/');