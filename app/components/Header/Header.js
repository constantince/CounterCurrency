import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
const Header = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image resizeMode="contain" style={styles.imageStyle} source={require('./images/gear.png')} />
  </TouchableOpacity>
);

Header.propTypes = {
  onPress: PropTypes.func,
};

export default Header;
