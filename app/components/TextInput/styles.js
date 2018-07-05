import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,
  inputStyle: {
    height: INPUT_HEIGHT,
    flex: 1,
    backgroundColor: '$white',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 20,
    paddingHorizontal: 8,
    color: '$inputText'
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  textStyle: {
    color: '$primaryBlue',
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    width: '90%',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  touchStyle: {
    height: INPUT_HEIGHT,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderRightColor: '$border',
    borderRightWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  }
});