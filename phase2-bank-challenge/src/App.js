// Importing data from other components
import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from "./SearchBar"
import './App.css'

// Main component for the application
const App = () => {
  // this is to store transactions and search terms
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch transactions from the server when the component mounts
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Function to fetch transactions from the db.json file
  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:8001/transactions');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // change the response into JSON and set the transactions in the state
      const data = await response.json();
      const transactionsArray = data.transactions || data;

      setTransactions(transactionsArray);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  // Function to handle adding a new transaction
  const handleAddTransaction = (newTransaction) => {
    // Update the transactions state with the new transaction
    setTransactions([...transactions, newTransaction]);
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
// components will be loaded in the return of the function
  return (
    <div id='parentdiv'>
      <div id='Siteheader'><h1>Flat ironBank</h1></div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

// Export the main App component to the index.js file
export default App;

