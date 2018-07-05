import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import styles from './styles';

const Icon = ({checkmark, visible}) => {
    const IconStyles = [styles.icon];
    if (visible) {
        IconStyles.push(styles.iconVisible);
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
    checkmark: PropTypes.bool
}

export default Icon;