import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, View, Text} from 'react-native';
import styles from './styles';

import Icon from './Icon';

const ListItems = ({ text, onPress, selected = false, checkmark = true, visible = true}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
            {selected ? <Icon visible={visible} checkmark={checkmark} /> : <Icon />}
    </View>
  </TouchableHighlight>
);

ListItems.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  visible: PropTypes.bool,
    checkmark: PropTypes.bool
};


export default ListItems;