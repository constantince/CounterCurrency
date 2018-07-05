import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar} from 'react-native';
export default EStyleSheet.create({
  imageStyle: {
    width: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'flex-end',
    width: '90%',
    textAlign: 'right',
    '@media ios': {
      paddingTop: 40
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight
    }
  }
});