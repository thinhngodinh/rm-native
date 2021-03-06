import React, { Component } from 'react';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { authSaga } from './src/services/middlewares/authorizationSaga';
import { projectSaga } from './src/services/middlewares/projectSaga';
import configStore from './src/services/createStore';
import { Root, StyleProvider } from "native-base";

import { appActions } from './src/static/actionsIndex';
import NavigationService from './src/services/navigationService'
import HttpService from './src/services/httpServices';
import ApiService from './src/services/apiService';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

const saga = createSagaMiddleware();
const store = configStore(saga)

const httpServices = new HttpService();
const apiService = new ApiService(httpServices);



// implement run saga here
saga.run(authSaga, apiService);
saga.run(projectSaga, apiService);

store.dispatch(appActions.initApp.invoke());

import AppContainer from './src/screens';


export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
            <Root>
              <AppContainer ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef) }} />
            </Root>
        </Provider>
      </StyleProvider>
    );
  }
}

