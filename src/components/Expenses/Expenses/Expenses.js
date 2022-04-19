import React, {useState} from 'react';

import Card from "../../UI/Card/Card";
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [year, setYear] = useState('2022');

    const selectYearHandler = (event) => {
        setYear(event.target.value);
    }

    const filteredExpenses = props.item.filter ((expense) => {
        return expense.date.getFullYear().toString() === year;
    }) 


    return(
        <Card className="expenses">
        <ExpensesFilter 
            onYearSelect={selectYearHandler} 
            year={year}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    )   
}


export default Expenses;