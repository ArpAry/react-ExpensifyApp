import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from '../selectors/expenses_total';
import numeral from 'numeral';
//{formattedtotal}
export const ExpenseSummary=({expenseCount =0,expensesTotal=4123}) => {
    const expensesWord = expenseCount === 1 ?'expense':'expenses';
    const formattedExpenseTotal=numeral(expensesTotal/100).format('$,0.00');
   
//console.log(expensesTotal);
    return (
        <div>
        <h1>Viewing {expenseCount} {expensesWord} totaling  {formattedExpenseTotal}  </h1> 
    </div>);
;
}
const mapStateToProps=(state)=>{
    const visibleExpenses=selectExpenses(state.expenses,state.filters);
    return{
        expenseCount:visibleExpenses.length,
        expensesTotal:selectExpensesTotal(visibleExpenses)
 
    }
};
export default connect(mapStateToProps)(ExpenseSummary);