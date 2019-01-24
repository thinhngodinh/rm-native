import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { userReducer } from './reducers/userReducer';
import { applicationReducer } from './reducers/appReducer';
import { projectReducer } from './reducers/projectReducer';

const rootReducer = combineReducers({
    user: userReducer,
    app: applicationReducer,
    project: projectReducer,
    form: formReducer
})

const configStore = (middleware) => {
    return createStore(
        rootReducer,
        applyMiddleware(middleware))
}

export default configStore;
