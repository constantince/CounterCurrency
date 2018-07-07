import React, {Component} from 'react';
import { ListItem } from './../components/List';
import { View, Text, Platform, StatusBar, Linking} from 'react-native';
import  {Ionicons} from '@expo/vector-icons';
import connectAlert from './../components/Alert/connectAlert';
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_SIZE = 23;
const ICON_COLOR = '#868686';

class Options extends Component {

    onPressTheme = () => {
        this.props.navigation.navigate('Theme');
    }

    onPressNavIo = () => {
        Linking.openURL("http://fixer.io").catch(() => 
        this.props.alertWithType('error', 'Sorry!', 'something wrong when open Fixer.io, please try again!'));
    }


    render() {
        return <View>
            <StatusBar StatusBarAnimation="fade" translucent={false} barStyle="dark-content" />
            <ListItem 
            text="theme" 
            onPress={this.onPressTheme}
            customIcon={
                    <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
            } 
            />
            <ListItem 
            text="Fixer.io" 
            onPress={this.onPressNavIo}
            customIcon={
                <Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />
            }
            
            />
          </View>;
    }
}


export default connectAlert(Options);
