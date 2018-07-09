import React, { Component } from "react";
import { FlatList, StatusBar, View } from 'react-native';
import { ListItem } from '../components/List';
import currencies from '../data';
import {connect} from 'react-redux';
import { changeCurrency } from '../Actions/action';
const TEMP_CURRENT_CURRENCY = 'CAD'


class CurrentList extends Component {


    handlePress(value) {
        this.props.dispatch(changeCurrency("quoteCurrency", value));
        this.props.navigation.goBack(null);
    }

    render() {
        return <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList 
            data={currencies}
             renderItem={({ item }) => 
             <ListItem text={item} 
                selected={item === this.props.quote}
                onPress={this.handlePress.bind(this, item)} />} 
                keyExtractor={item => item} 
                checkmark={false}
              />
          </View>;
    }
}

const matStateToProps = (state) => ({
    quote: state.currencies.quoteCurrency
})

export default connect(matStateToProps)(CurrentList);