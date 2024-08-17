import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/action/taskActions';

const Task = ({ task, index }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(index));
    };

    return (
        <li className="task-item">
            <span>{task.name} - <span className={`task-priority priority-${task.priority.toLowerCase()}`}>{task.priority}</span></span>
            <button onClick={handleDelete} className="delete-task-button">Delete</button>
        </li>
    );
};

export default Task;
