
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  
    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    const filteredExpenses=props.items.filter(expense=>{
      return expense.date.getFullYear().toString() === filteredYear;
    })
    
    
  return (
    <Card className="expenses">
      
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
       <ExpenseList items={filteredExpenses} />
      
      
    </Card>
  );

  }
export default Expenses;