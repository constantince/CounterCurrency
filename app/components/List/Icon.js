import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import styles from './styles';

const Icon = ({ checkmark, visible, iconBackground}) => {
    let IconStyles = [styles.icon];

    if (visible) {
        IconStyles.push(styles.iconVisible);
    }

    if (iconBackground) {
        IconStyles.push({ backgroundColor: iconBackground });
    }


    return <View style={IconStyles}>
        {checkmark ? (
          <Image
            source={require("./images/check.png")}
            style={styles.checkIcon}
            resizeMode="contain"

          />
        ) : null}
      </View>;
}


Icon.propType = {
  checkmark: PropTypes.bool,
  iconBackground: PropTypes.string,
};

export default Icon;