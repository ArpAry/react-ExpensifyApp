import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
const ExpenseListItem = ({ id,  description, amount, createdAt }) => (
  <div>
  <Link to={`\edit/${id}`}>
    <h1>{description}</h1>
    </Link> 
    <p>
  
    {amount}
    -
    {moment(createdAt).format("MMM Do YY") }
    
    </p>
    
  </div>
);

export default ExpenseListItem;
