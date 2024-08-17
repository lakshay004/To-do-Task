import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action/taskActions';
import { FiBell, FiRefreshCw, FiCalendar } from 'react-icons/fi';
import DatePicker from 'react-datepicker'; // Add react-datepicker for the calendar
import 'react-datepicker/dist/react-datepicker.css';
import '../styles.css';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const [notification, setNotification] = useState(false);
    const [dueDate, setDueDate] = useState(null);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask({ name: task, completed: false, notification, dueDate }));
            setTask('');
            setNotification(false);
            setDueDate(null);
        }
    };

    const handleReset = () => {
        setTask('');
        setNotification(false);
        setDueDate(null);
    };

    return (
        <div className="task-input-wrapper">
            <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add A Task"
                className="task-input"
                rows="2"
            />
            <div className="task-input-icons">
                <FiBell
                    className={`icon ${notification ? 'active' : ''}`}
                    onClick={() => setNotification(!notification)}
                />
                <FiRefreshCw className="icon" onClick={handleReset} />
                <DatePicker
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                    customInput={<FiCalendar className="icon" />}
                />
            </div>
            <button onClick={handleAddTask} className="add-task-button">ADD TASK</button>
        </div>
    );
};

export default TaskInput;
