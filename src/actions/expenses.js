import { v4 as uuid } from "uuid";
//ADDEXPENSE Action Generator
export const addExpense = ({
  description = "",
  note = "",
  amount = 100,
  createdAt = 0,
} = {}) => ({
  type: "ADDEXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
//
//EXPENSE Action Generator
//REMOVE EXPENSE
//
export const removeExpense = ({ id }) => ({
  type: "REMOVEEXPENSE",
  id,
});

//EDIT EXPENSE
export const editExpense = ({id}, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update,
});
