// NavigationService.js

import { NavigationActions } from 'react-navigation';
import { call } from 'redux-saga/effects';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  console.log('Navigate to %s', routeName, params);
  _navigator.dispatch.call(this, NavigationActions.navigate({routeName, params}));
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
};