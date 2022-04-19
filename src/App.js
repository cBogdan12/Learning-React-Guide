import React, {useState} from 'react';

import Expenses from "./components/Expenses/Expenses/Expenses";
import Card from "./components/UI/Card/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import AddNewExpense from './components/NewExpense/AddNewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Racoon Food",
    amount: 31.22,
    date: new Date(2021, 10, 3),
  },
  {
    id: "e2",
    title: "Sunflower Oil",
    amount: 61.43,
    date: new Date(2021, 11, 4),
  },
  {
    id: "e3",
    title: "Health Insurance",
    amount: 234.43,
    date: new Date(2021, 5, 2),
  },
  {
    id: "e4",
    title: "Sofa",
    amount: 634.43,
    date: new Date(2021, 4, 3),
  },
  {
    id: "e5",
    title: "PC Games",
    amount: 150.43,
    date: new Date(2022, 1, 28),
  },
  {
    id: "e6",
    title: "Foood",
    amount: 51.43,
    date: new Date(2022, 2, 15),
  },
  {
    id: "e7",
    title: "Racoon",
    amount: 999.99,
    date: new Date(2022, 7, 5),
  },
  {
    id: "e8",
    title: "Bills",
    amount: 301.43,
    date: new Date(2022, 0, 3),
  },
  {
    id: "e9",
    title: "Laptop",
    amount: 1307.43,
    date: new Date(2022, 8, 10),
  },

];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  const [route, setRoute] = useState('AddNewExpense');

  const onRouteChange = (event) => {
    setRoute(event)
  }

  return (
    <Card className="expenses">
      {
        route === 'AddNewExpense'
          ? <AddNewExpense onRouteChange={onRouteChange} />
          : <NewExpense 
            onAddExpense={addExpenseHandler}
            onRouteChange={onRouteChange}
            />
      }
      
      <Expenses item={expenses} />
    </Card>
  );
}

export default App;
