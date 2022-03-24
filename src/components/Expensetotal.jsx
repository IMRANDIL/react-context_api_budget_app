import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';




const Expensetotal = () => {

    const { expenses } = useContext(AppContext);


    const totalexp = expenses.reduce((total, curr) => {
        return total + curr.cost
    }, 0)



    return (
        <div className='alert alert-primary'>
            <span>Spent so far: ${totalexp}</span>
        </div>
    )
}

export default Expensetotal