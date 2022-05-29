import { createTestScheduler } from 'jest';
import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('Should contain expense objects ',()=>{
    const action =removeExpense({id:'123abc'});
    expect(action).toEqual({    
        type:'REMOVEEXPENSE',
        id:'123abc'
    });
});

test('Should edit Expense',()=>{
    const edit=editExpense({id:"135abd",note:"hello"});
    expect(edit).toEqual({
        type:'EDIT_EXPENSE',
        id:'135abd',
       "update":undefined
    });
});

test('should setup add expense action object',()=>{
    const expenseData={
        description:'Rent',
        amount:109500,
        createdAt:1000,
        note:'this was last months rent'
    }
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:'ADDEXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String),
            

        }
    })
});

test('should setup add Expense action object ',()=>{
    const action=addExpense();
    expect(action).toEqual({
        type:'ADDEXPENSE',
        expense:{
            id:expect.any(String),
            description:"",
            note:"",
            amount:100,
            createdAt:0
        }
    })
})