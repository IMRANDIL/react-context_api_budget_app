import React from 'react'
import ExpenseItem from './ExpenseItem'






const ExpenseList = () => {

    const expenses = [
        { id: 1444, name: 'Shopping', cost: 540 },
        { id: 144, name: 'Holiday', cost: 507 },
        { id: 1044, name: 'Transportation', cost: 590 },
        { id: 1484, name: 'Fuel', cost: 508 },
        { id: 1474, name: 'Child care', cost: 550 },
        { id: 1446, name: 'Love', cost: 500 },
    ]







    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList