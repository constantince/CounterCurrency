import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    color: '$white',
    fontSize: 17,
  },
  imageStyle: {
    width: 20,
    height: 20,
    marginRight: 10
  },
});
