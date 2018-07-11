import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
const Words = ({ base, quote, date, currencies }) => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>
      1 {base}={currencies} {quote} as of {date}
    </Text>
  </View>
);


Text.propTypes = {
  currencies: PropTypes.number,
  base: PropTypes.string,
  quote: PropTypes.string,
  date: PropTypes.string,
}

export default Words;