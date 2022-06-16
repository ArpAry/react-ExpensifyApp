export default(expense)=>{
    return expense.map((expense)=>expense.amount).reduce((sum,value)=> sum + value,0);
};