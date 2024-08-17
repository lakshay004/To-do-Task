import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import { fetchWeather } from '../redux/action/taskActions';
import '../styles.css';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.taskList);
    const weatherData = useSelector((state) => state.tasks.weatherData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    console.log('weatherData1 -',weatherData)

    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <TaskItem key={index} task={task} index={index} />
            ))}
            <div className="completed-tasks">
                <h2>Completed</h2>
                {tasks.filter(task => task.completed).map((task, index) => (
                    <TaskItem key={index} task={task} index={index} />
                ))}
            </div>
           {weatherData && <div>
                <h3>Events:</h3>
                <ul>
                    {weatherData.map((event, index) => (
                        <>
                        <div className={`task-item event-item`}>
                            <span>{event.match}</span>
                        </div>
                        </>
                    ))}
                </ul>
            </div>}
        </div>
    );
};

export default TaskList;
