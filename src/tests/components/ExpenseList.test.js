import React from 'react';
import {
    shallow
} from 'enzyme';
import {ExpenseList} from '../../js-component/ExpenseList';
import expense from '../fixtures/expenses';

test('should render ExpenseList with Expense',()=>{
    const wrapper=shallow(<ExpenseList expense={
        expense}/>);
        expect(wrapper).toMatchSnapshot();
});