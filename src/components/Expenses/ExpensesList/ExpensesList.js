import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
  let expensesContent = <p className='noExpenses'>No expenses found</p>

  if (props.filteredExpenses.length > 0) {
      expensesContent = props.filteredExpenses.map(expense => (
          <ExpenseItem 
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
              />   
      ))
  }

return (
  <ul className='list'>
    {expensesContent}
  </ul>
)
}

export default ExpensesList;