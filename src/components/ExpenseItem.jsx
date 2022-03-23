import React from 'react'

import { TiDelete } from 'react-icons/ti'






const ExpenseItem = ({ id, name, cost }) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>

            {name}

            <div>
                <span className='badge bg-primary mx-5'>
                    ${cost}

                </span>
                <TiDelete />

            </div>


        </li>
    )
}

export default ExpenseItem