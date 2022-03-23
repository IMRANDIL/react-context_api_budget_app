
import React from 'react'
import Budget from './components/Budget';






const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className='mt-3'>
          My Budget Planner
        </h1>

        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
