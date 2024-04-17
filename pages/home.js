'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Expenses from '../src/app/components/Expenses/Expenses';
import NewExpense from '../src/app/components/NewExpense/NewExpense';
import '../src/app/globals.css';



function App() {
  
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      img: 'https://d1nymbkeomeoqg.cloudfront.net/photos/28/53/406870_3175_XL.jpg',
      title: 'Shoes',
      amount: 67.12
    },
    { 
      id: 'e2', 
      img: 'https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com//Images/en-US/Lobby/TvWall/Reward%20point-Wall%20Banner-Mobile-1536X640.png?v=981a12ffa05dbf5e61ae35bfde3cf6bb7245df31',
      title: 'Computer', 
      amount: 546.87
    },
    {
      id: 'e3',
      img: 'https://www.bankrate.com/2020/08/01170557/How-to-save-money-on-groceries.jpeg',
      title: 'Groceries',
      amount: 78.95
    }
  ]);

  const addExpenseHandler = (expenseData) => {
    setExpenses(prevExpenses => [...prevExpenses, expenseData]);
  };

  const router = useRouter();
  
  const handleLogout = () => {
    router.push('/');
  };

  return (
    //<ProtectedRoute loggedIn={loggedIn}>
        <div>
            <header className="app-header">
                <h1 className="app-title">WiseWallet</h1>
                <p className="app-subtitle">Expense Tracker</p>
                <button onClick={handleLogout}>Logout</button>
            </header>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses} />
            <footer className="app-slogan">
                <p>Your Journey to Financial Freedom Starts Here</p>
            </footer>
        </div>
    //</ProtectedRoute>
    
  );
}

export default App;