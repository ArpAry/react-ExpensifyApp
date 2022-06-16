import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import numeral from "numeral";
//numeral.defaultFormat('₹0,0.00');
const ExpenseListItem = ({ id,  description, amount, createdAt }) => (
  <div>
  <Link to={`\edit/${id}`}>
    <h1>{description}</h1>
    </Link> 
    <p>

     {numeral(amount).format('$0,0.00')}--
     {moment(createdAt).format("MMM Do YY") } 
    
    
    </p>
    
  </div>
);

export default ExpenseListItem;
