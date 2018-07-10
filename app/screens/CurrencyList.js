import React, { Component } from "react";
import { FlatList, StatusBar, View } from 'react-native';
import { ListItem } from '../components/List';
import currencies from '../data';
import {connect} from 'react-redux';
import { changeQuoteCurrency } from "../Actions/action";


class CurrentList extends Component {


    handlePress(value) {
        //改变引用汇率
        const {type} = this.props.navigation.state.params;
        if (type === 'base') {
            this.props.dispatch({ type: 'GET_CURRENCY', value});
        } else {
            this.props.dispatch(changeQuoteCurrency(value));
        }
        
        this.props.navigation.goBack(null);
    }

    render() {
        const { base, quote, navigation} = this.props;
        const selectedList = navigation.state.params.type === 'base' ? base : quote;
        return <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList 
            data={currencies}
             renderItem={({ item }) => 
             <ListItem text={item} 
                     selected={item === selectedList}
                onPress={this.handlePress.bind(this, item)} />} 
                keyExtractor={item => item} 
                checkmark={false}
              />
          </View>;
    }
}

const matStateToProps = state => ({
  quote: state.currencies.quoteCurrency,
  base: state.currencies.baseCurrency
});

export default connect(matStateToProps)(CurrentList);