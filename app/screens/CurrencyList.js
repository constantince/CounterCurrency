import React, { Component } from "react";
import { FlatList, StatusBar, View } from 'react-native';
import { ListItem } from '../components/List';
import currencies from '../data/index'

const TEMP_CURRENT_CURRENCY = 'CAD'


class CurrentList extends Component {


    handlePress = () => {
        console.log('row pressed!');
    }

    render() {
        return <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />>
            <FlatList 
            data={currencies}
             renderItem={({ item }) => 
             <ListItem text={item} 
                selected={item === TEMP_CURRENT_CURRENCY}
                onPress={this.handlePress} />} 
                keyExtractor={item => item} 
                checkmark={false}
              />
          </View>;
    }
}

export default CurrentList;