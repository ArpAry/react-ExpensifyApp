import React from "react";
import { useParams ,useNavigate } from "react-router-dom";
import { useSelector,connect } from "react-redux";
import ExpenseFormPage from "./ExpenseFormpage";
import { editExpense, removeExpense } from "../actions/expenses";
const ExpensifyEdit = (props) => {
  const {id}=useParams();
  const navi = useNavigate();
  const expense = useSelector((state) => state.expense.find(expense => expense.id === id));
 // console.log(props);{}
  return (
    <div>
      <ExpenseFormPage
     expense ={expense}
        onSubmit={(expense) => {
          console.log("updated ",props.expense);
          props.dispatch(editExpense( id ,expense));
          navi("/");
        
        }}
      />
      <button
        onClick={(e) => {
          props.dispatch(removeExpense({id}));
          navi("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     expense: state.expense.find((expense) => expense.id === state.id),
//   };
// };
export default connect()(ExpensifyEdit);
