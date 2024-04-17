import React, { useState } from 'react';
import Card from '../UI/Card';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredImg,setEnteredImg] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const imgChangeHandler = (event) => {
    setEnteredImg(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredTitle || !enteredAmount) {
      alert('Please fill in all fields');
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      img: enteredImg
    };

    props.onSaveExpenseData(expenseData);
    console.log(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredImg('');
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Link to Image</label>
          <input
            value={enteredImg}
            onChange={imgChangeHandler}
          />
        </div>
          <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
          </div>
        </div>
      </form>
    </Card>
    
  );
};

export default ExpenseForm;
