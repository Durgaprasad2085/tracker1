import React, { useState } from 'react';
import'./App.css'

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Transportation', amount: 30 },
    { id: 3, description: 'Utilities', amount: 100 }
  ]);

  const addExpense = (description, amount) => {
    const newExpense = { id: expenses.length + 1, description, amount };
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div id='div'>
      <h1>Expense Tracker</h1>
      <h2>Total Expenses: ${totalExpenses}</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <AddExpenseForm addExpense={addExpense} />
    </div>
  );
};

const AddExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addExpense(description, Number(amount));
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseTracker;
