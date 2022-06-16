import React from "react";
import ExpenseList from "./ExpenseList";
//import ExpensifyAdd from "./ExpensifyAdd";
import ExpenseListFilter from "./ExpenseListFilter";
import {ExpenseSummary} from "./ExpenseSummary";
const ExpensifyDashboard=()=>(
  <div>
  
   <h1>Dashboard Page</h1>
   <ExpenseSummary/>
   <ExpenseListFilter/>
   <ExpenseList/>
  </div>
);
export default ExpensifyDashboard;
//<ExpenseList/>

//<ExpenseSummary/>