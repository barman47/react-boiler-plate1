import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn }  
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history}
        expenses={expenses[2]} />
    );

    test('should render EditExpensePage', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should handle editExpense', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
        expect(histroy.push).toHaveBeenLastCalledWith('/');
        expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    });

    test('should handle removeExpense', () => {
        wrapper.find('button').simulate('click');
        expect(histroy.push).toHaveBeenLastCalledWith('/');
        expect(removeExpense).toHaveBeenLastCalledWith({
            id: expenses[2].id
        }); 
    });
});
