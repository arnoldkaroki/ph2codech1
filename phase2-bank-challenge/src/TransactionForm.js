
import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction, transactionCount }) => {
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    category: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddClick = () => {

    const numberedTransaction = { ...newTransaction, id: transactionCount + 1 };
    

    onAddTransaction(numberedTransaction);


    setNewTransaction({ description: '', amount: '', category: '', date: '' });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={newTransaction.description}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Amount"
        name="amount"
        value={newTransaction.amount}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={newTransaction.category}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Date"
        name="date"
        value={newTransaction.date}
        onChange={handleInputChange}
      />
      <button onClick={handleAddClick}>Add Transaction</button>
    </div>
  );
};

export default TransactionForm;