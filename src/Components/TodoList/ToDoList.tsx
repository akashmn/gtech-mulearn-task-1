import { ChangeEvent, useState } from 'react'
import './ToDoList.css'
import { ITask } from '../Interface/Interfaces'
import ToDoTask from '../TodoTask/ToDoTask'

const ToDoList = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodolist] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value)
    }else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = () => {
    const newTask = {taskName:task, deadline:deadline}
    setTodolist([...todoList, newTask])
    console.log(todoList)
    setTask("")
    setDeadline(0)
  }

  return (
    <div className='main-container'>
        <div className="header">
            <div className="input-container">
                <input 
                  name='task'
                  type="text" 
                  placeholder='Enter the task...'
                  value={task}
                  onChange={handleChange} />

                <input 
                  name='deadline'
                  type="number" 
                  placeholder='Deadline (in Days)'
                  value={deadline}
                  onChange={handleChange} />
            </div>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className="todo-list">
          {todoList.map((task:ITask, key: number ) => {
            return <ToDoTask key={key} task={task} />
          })}
        </div>
    </div>
  )
}

export default ToDoList