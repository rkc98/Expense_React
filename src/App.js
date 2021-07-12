import { useState } from 'react';
import Expenses from './Components/Expense/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const App = () => {
  const initialexpenses = [
    
    { id: 'e1', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e3',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses,setexpenses]=useState(initialexpenses);
  const addExpenseHandler = expense => {
    
    setexpenses([...initialexpenses,expense]);
    
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;