import axios from 'axios';

export const addTask = (task) => (dispatch, getState) => {
    dispatch({ type: 'ADD_TASK', payload: task });
    const { tasks } = getState();
    localStorage.setItem('tasks', JSON.stringify(tasks.taskList));
};

export const deleteTask = (index) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_TASK', payload: index });
    const { tasks } = getState();
    localStorage.setItem('tasks', JSON.stringify(tasks.taskList));
};

export const fetchWeather = () => async (dispatch) => {
    try {
        const response = await axios.get('http://api.weatherapi.com/v1/sports.json?key=a39229319ed64299995102106241608&q=London');
        dispatch({
            type: 'FETCH_WEATHER_SUCCESS',
            payload: response.data.football
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_WEATHER_FAIL',
            payload: error.message
        });
    }
};

