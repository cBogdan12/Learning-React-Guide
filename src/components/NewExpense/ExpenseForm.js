import React, { useState } from 'react';

import ErrorModal from '../UI/Card/ErrorModal';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState(new Date());
    const [enteredAmount, setEnteredAmount] = useState('');

    const [error, setError] = useState();
;

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value); 
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredAmount.length > 0 && enteredDate.length > 0 && +enteredAmount >= 0 ) {
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(expenseData)

        props.onSaveExpenseData(expenseData)
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        } else {
            setError({
                title: 'Invalid form',
                message:'Please make sure that the entered title, amount and date are valid. '
            })
        }
    };

    const errorHandler = () => {
        setError(null)
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onError={errorHandler}/>}
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label >Title</label>
                        <input 
                            type='text' 
                            onChange={titleChangeHandler} 
                            value={enteredTitle}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input 
                            onChange={amountChangeHandler}
                            type='number' 
                            min='0.01' 
                            step='0.01'
                            value={enteredAmount} 
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' 
                            onChange={dateChangeHandler} 
                            min='2019-01-01' 
                            max='2022-12-31' 
                            value={enteredDate}
                        />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={() => props.onRouteChange('AddNewExpense')}>Cancel</button>
                    <button type='Submit'>Add expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;