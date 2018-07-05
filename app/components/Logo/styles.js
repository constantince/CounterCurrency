import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: '$largeImageSize',
    tintColor: '$primaryBlue'
  },
  text: {
    color: '$white',
    fontSize: 28,
    letterSpacing: -.5,
    marginTop: 15,
    fontWeight: '600'
  },
});
