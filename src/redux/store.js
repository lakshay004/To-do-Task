import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import tasksReducer from './reducers/taskReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
