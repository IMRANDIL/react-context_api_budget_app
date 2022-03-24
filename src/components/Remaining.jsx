import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';






const Remaining = () => {

    const { expenses, budget } = useContext(AppContext)


    const totalexp = expenses.reduce((total, curr) => {
        return total + curr.cost
    }, 0)


    return (
        <div className='alert alert-success'>
            <span>Remaining: {budget - totalexp}</span>
        </div>
    )
}

export default Remaining