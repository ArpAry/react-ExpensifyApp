import moment from "moment";
//
//Get Visible Expenses
//

export default  (expense, { text, sortby, startDate, endDate }) => {
    return expense
      .filter((expense) => {
       const createdAtMoment=moment(expense.createdAt);
        const startDateMatch =startDate? startDate.isSameOrBefore(createdAtMoment,'day'):true;
        const endDateMatch =endDate?endDate.isSameOrAfter(createdAtMoment,'day'):true;
        const textMatch =
          expense.description.toLowerCase().includes(text.toLowerCase()) ||
          textMatch;
        return startDateMatch && endDateMatch && textMatch;
      })
      .sort((a, b) => {
        if (sortby === "Date") {
          return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortby==="amount")
        {
          return a.amount <b.amount ?1:-1;
        }
      });
  };