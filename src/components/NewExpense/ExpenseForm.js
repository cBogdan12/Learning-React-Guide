import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState(new Date());
    const [enteredAmount, setEnteredAmount] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value); 
       //    setUserInput({
       //        ...userInput,
       //        enteredTitle: event.target.value,
       // });
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.tarhet.value}
        // })
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    //    setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value,
    //    });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle: event.target.value,
    //     });
    };

    const submitHandler = (event) => {
        event.preventDefault();

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
    };

    return(
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
    )
}

export default ExpenseForm;