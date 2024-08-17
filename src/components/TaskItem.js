import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/action/taskActions';
import '../styles.css';

const TaskItem = ({ task, index }) => {
    const dispatch = useDispatch();

    return (
        <div className={`task-item tasklist ${task.completed ? 'completed' : ''}`}>
            <span>{task.name}</span>
            <button onClick={() => dispatch(deleteTask(index))} className="task-delete-button">
                Delete
            </button>
        </div>
    );
};

export default TaskItem;
