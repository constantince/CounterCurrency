import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';
import styles from './styles';

const InputWidthButton = ({onPress, editable, buttonText}) => {
  
  const inputContainerStyle = [styles.inputStyle];

  if(editable === false) {
    inputContainerStyle.push(styles.containerDisabled);    
  }
  //设置按钮按下去的颜色和透明度，使用color库
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
  
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.touchStyle}
        underlayColor={underlayColor}>
        <Text style={styles.textStyle}>{buttonText}</Text>
      </TouchableHighlight>
      <TextInput style={inputContainerStyle} editable={editable} keyboardType="numeric" />
    </View>
  );
};

InputWidthButton.propTypes = {
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  buttonText: PropTypes.string,
}

export default InputWidthButton;
