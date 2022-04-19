import React from 'react';
import './NewExpense.css';

const AddNewExpense = (props) => {
  return(
    <div className='new-expense'>
      <button onClick={() => props.onRouteChange('Form')}>Add new expense</button>
    </div>
  )
}

export default AddNewExpense;