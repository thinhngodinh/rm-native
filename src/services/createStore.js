import { createStore, combineReducers, applyMiddleware } from 'redux';

import { userReducer } from './reducers/userReducer';
import { applicationReducer } from './reducers/appReducer';
import { projectReducer } from './reducers/projectReducer';

const rootReducer = combineReducers({
    user: userReducer,
    app: applicationReducer,
    project: projectReducer
})

const configStore = (middleware) => {
    return createStore(
        rootReducer,
        applyMiddleware(middleware))
}

export default configStore;
