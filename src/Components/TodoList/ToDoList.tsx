import React from 'react'
import './ToDoList.css'

const ToDoList = () => {
  return (
    <div className='main-container'>
        <div className="header">
            <div className="input-container">
                <input  className='' type="text" placeholder='Enter the task...' />
                <input type="number" placeholder='Deadline (in Days)' />
            </div>
            <button>Add Task</button>
        </div>
        
    </div>
  )
}

export default ToDoList