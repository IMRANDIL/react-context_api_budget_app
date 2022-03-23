
import React from 'react'
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import Expensetotal from './components/Expensetotal';
import Remaining from './components/Remaining';






const App = () => {
  return (

    <div className="container">
      <h1 className='mt-3'>
        My Budget Planner
      </h1>

      <div className="row mt-3">
        <div className="col-sm">
          <Budget />

        </div>

        <div className="col-sm">
          <Remaining />
        </div>

        <div className="col-sm">
          <Expensetotal />
        </div>

      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
    </div>

  );
}

export default App;
