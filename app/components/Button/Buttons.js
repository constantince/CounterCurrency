import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
const exChangeButton = ({ onPress, buttonText }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image style={styles.imageStyle} source={require('./images/icon.png')} />
    <Text style={styles.textStyle}>{buttonText}</Text>
  </TouchableOpacity>
);

exChangeButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
};

export default exChangeButton;
