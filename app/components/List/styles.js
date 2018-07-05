import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: "$border",
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "$white",
    borderBottomWidth: 0.5,
    borderBottomColor: "$border"
  },
  text: {
    fontSize: 16,
    color: "$darkText"
  },
  icon: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  iconVisible: {
    backgroundColor: "$primaryBlue"
  },
  checkIcon: {
      width: 18
  }
});