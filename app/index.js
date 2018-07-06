import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2e2e2',
  $inputText: '#797979',
  $darkText: '#343434'
});

export default () => <Options />;
