import expenseReducers from "../../reducers/expenses";
import expense from "../fixtures/expenses";

test('should return empty array ',()=>{
    const action = expenseReducers(undefined,{ type:"@@INIT" });
    expect(action).toEqual([]);
});

test('should remove array ',()=>{
    const action={
        type:"REMOVEEXPENSE",
        id:expense[1].id
    };
    const state=expenseReducers(expense,action);
    expect(state).toEqual([expense[0],expense[2]]);
})

test('should should not  remove if not matching id ',()=>{
    const action={
        type:"REMOVEEXPENSE",
        id:'-1'
    };
    const state=expenseReducers(expense,action);
    expect(state).toEqual(expense);
})

//should add an expense

test('should add an expense ',()=>{
    const expens={
        id:'103',
        description:"LAPTOP",
        note:"",
        amount:100500,
        created:121314
    }
    const action={
        type:"ADDEXPENSE",
        expense:expens
    }
    const state=expenseReducers(expense,action);
    expect(state).toEqual([...expense,expens])
});

//should edit  expense id if id is present  
test('should edit an expense ',()=>{
    const amount=1201;
    const action={
        type:"EDIT_EXPENSE",
        id:expense[1].id,
        updates:{
            amount
        }

    }
    const state=expenseReducers(expense,action);
    expect(state[1].amount).toBe(amount);
});


//should  not edit an expense if id is not present



// test('should not edit an expense if does not match ',()=>{
//     const amount=1201;
//    // const expense ={...expense};
//     const action={
//         type:"EDIT_EXPENSE",
//         id:'-1',
//         updates:{
//             amount
//         }

//     };
//    const state=expenseReducers(expense,action);

//     expect(state).toEqual(state);
// });