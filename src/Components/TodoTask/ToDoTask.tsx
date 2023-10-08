import React from 'react';
import { ITask } from '../Interface/Interfaces';
import './ToDoTask.css'

interface Props {
  task: ITask;
}

const ToDoTask = ({ task }: Props) => {
  return (
    <div className='task-bar'>
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button>X</button>
    </div>
  );
};

export default ToDoTask;
