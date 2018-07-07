import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import { StatusBar } from 'react-native';
import Theme from '../screens/Theme';
import Options from "../screens/Options";

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
            headerTitle: "Home"
        }
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: "Options"
        }
    },
    Theme: {
        screen: Theme,
        navigationOptions: {
            headerTitle: "Theme"
        }
    }
},
    {
        headerMode: 'screen',
    });

const CurrencyListStack = createStackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title
        })
    }
});


export default createStackNavigator(
    {
        Home: {
            screen: HomeStack
        },
        CurrencyList: {
            screen: CurrencyListStack
        }
    },
    {
        mode: "modal",
        headerMode: 'none',
        cardStyle: { paddingTop: StatusBar.currentHeight }
    }
);