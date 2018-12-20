import { createStore, combineReducers, applyMiddleware } from 'redux';

import { userReducer } from './reducers/userReducer';
import { applicationReducer } from './reducers/appReducer';

const rootReducer = combineReducers({
    user: userReducer,
    app: applicationReducer
})

const configStore = (middleware) => {
    return createStore(
        rootReducer,
        applyMiddleware(middleware))
}

export default configStore;
