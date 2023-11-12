
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
    <div id='formholder'>
      <input className='formInput'
        type="text"
        placeholder="Description"
        name="description"
        value={newTransaction.description}
        onChange={handleInputChange}
      />
      <input className='formInput'
        type="number"
        placeholder="Amount"
        name="amount"
        value={newTransaction.amount}
        onChange={handleInputChange}
      />
      <input className='formInput'
        type="text"
        placeholder="Category"
        name="category"
        value={newTransaction.category}
        onChange={handleInputChange}
      />
      <input className='formInput'
        type="text"
        placeholder="Date"
        name="date"
        value={newTransaction.date}
        onChange={handleInputChange}
      />
      <button id='transactionButton' onClick={handleAddClick}>Add Transaction</button>
    </div>
  );
};

export default TransactionForm;