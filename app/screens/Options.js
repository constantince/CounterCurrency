import React, {Component} from 'react';
import { ListItem } from './../components/List';
import {View, Text, Platform} from 'react-native';
import  {Ionicons} from '@expo/vector-icons';
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_SIZE = 23;
const ICON_COLOR = '#868686';

export default class Options extends Component {

    onPressTheme = () => {

    }

    onPressNavIo = () => {

    }


    render() {
        return <View>
            <ListItem 
            text="theme" 
            onPress={this.onPressTheme} 
            customIcon={
                    <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
            } 
            />
            <ListItem 
            text="theme" 
            onPress={this.onPressTheme}
            customIcon={
                <Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />
            }
            
            />
          </View>;
    }
}

