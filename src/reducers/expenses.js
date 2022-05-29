
// Expensify  Reducer
 const expensifyDefault = [];
export default  (state = expensifyDefault, action) => {
  switch (action.type) {
    case "ADDEXPENSE":
      return [...state, action.expense];
    case "REMOVEEXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return { expense };
        }
      });
    default:
      return state;
  }
};