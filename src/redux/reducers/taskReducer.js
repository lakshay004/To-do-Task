const initialState = {
    taskList: JSON.parse(localStorage.getItem('tasks')) || [],
    weatherData:[],
    error:""
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const updatedTaskList = [...state.taskList, action.payload];
            localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
            return {
                ...state,
                taskList: updatedTaskList,
            };
        case 'DELETE_TASK':
            const filteredTaskList = state.taskList.filter((_, index) => index !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(filteredTaskList));
            return {
                ...state,
                taskList: filteredTaskList,
            };
        case 'FETCH_WEATHER_SUCCESS':
            console.log('weatherData1 working');
            return {
                ...state,
                weatherData: action.payload,
                loading: false
            };
        case 'FETCH_WEATHER_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default tasksReducer;
