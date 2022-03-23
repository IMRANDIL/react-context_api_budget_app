import React from 'react'





const AddExpenseForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input type='text' required placeholder='Name' className='form-control' id='name' />
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input type="text" required placeholder='Cost' className='form-control' id='cost' />
                </div>
                <div className="col-sm">
                    <button type='submit' className='btn btn-primary'>Save</button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm