import React, {Component} from 'react';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { authSaga } from './src/services/middlewares/authorizationSaga';
import configStore from './src/services/createStore';
import { Root } from "native-base";

import HttpService from './src/services/httpServices';
import ApiService from './src/services/apiService';
const saga = createSagaMiddleware();
const store = configStore(saga)

const httpServices = new HttpService();
const apiService = new ApiService(httpServices);


// implement run saga here
saga.run(authSaga, apiService)

import AppContainer from './src/screens'

export default class App extends Component {
  render() {
    return (
      <Root>
        <Provider store= {store}>
          <AppContainer />
        </Provider>
      </Root>
    );
  }
}

