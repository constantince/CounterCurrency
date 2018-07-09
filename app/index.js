import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigation from './config/route';
import {AlertProvider} from './components/Alert';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger} from 'redux-logger';
import rootReducer from './Reducer';
EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",

  $white: "#FFFFFF",
  $lightGray: "#F0F0F0",
  $border: "#E2e2e2",
  $inputText: "#797979",
  $darkText: "#343434"
});

const loggMiddlerWare = createLogger({collapsed: true});

const store = createStore(rootReducer, applyMiddleware(loggMiddlerWare));

export default () => (<Provider store={store}>
  <AlertProvider>
    <Navigation />
  </AlertProvider>
</Provider>
);
