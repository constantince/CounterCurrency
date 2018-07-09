import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
const Container = ({ children, primaryColor }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={[styles.container, { backgroundColor: primaryColor}]}>{children}</View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: PropTypes.any,
  primaryColor: PropTypes.string,
};

const mapStateTopProps = state => ({
  primaryColor: state.themes.primaryColor
});

export default connect(mapStateTopProps)(Container);
