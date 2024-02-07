import {combineReducers,createStore,applyMiddleware} from 'redux';
import users from './reducers/users';
import tasks from './reducers/tasks';

const reducer=combineReducers({users,tasks});


const deleteTask = (store) => (next) => (action) => {
        return next(action);
    }
    

const store = createStore(reducer, applyMiddleware(deleteTask));
window.store=store
export default store









