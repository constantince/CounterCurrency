import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import moment from 'moment';
const Words = ({base, quote, currencies}) => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>1 {base} = {currencies} {quote} as of {moment().format('YYYY-MM-DD')}</Text>
  </View>
  );


Text.propTypes = {
  currencies: PropTypes.number,
  base: PropTypes.string,
  quote: PropTypes.string
}

export default Words;