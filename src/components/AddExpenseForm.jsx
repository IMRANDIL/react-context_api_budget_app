import React, { useState } from 'react'







const AddExpenseForm = () => {

    const [name, setName] = useState('');

    const [cost, setCost] = useState('')




    const handlesubmit = (e) => {
        e.preventDefault();

        alert(`name ${name}, cost ${cost}`)
    }








    return (
        <form onSubmit={handlesubmit}>
            <div className="row ">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input type='text' required placeholder='Name' className='form-control' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input type="text" required placeholder='Cost' className='form-control' id='cost' value={cost} onChange={(e) => setCost(e.target.value)} />
                </div>
                <div className="col-sm">
                    <button type='submit' className='btn btn-primary mt-3'>Save</button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm