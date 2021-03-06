import React, {Component} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import { ListItem } from "../components/List";
import { changeThemeColor } from "../Actions/action";
import {connect} from 'react-redux';
const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});
class Theme extends Component {
    handlePressTheme = (color) => {
        this.props.dispatch(changeThemeColor(color));
        this.props.navigation.goBack(null);
    }
    
    render() {
        return <ScrollView>
            <StatusBar translucent={false} barStyle="default" />
            <ListItem
                text="Blue"
                onPress={() => this.handlePressTheme(styles.$blue)}
                selected
                checkmark={false}
                iconBackground={styles.$blue}
            />
            <ListItem
                text="Orange"
                onPress={() => this.handlePressTheme(styles.$orange)}
                selected
                checkmark={false}
                iconBackground={styles.$orange}
            />

            <ListItem
                text="Green"
                onPress={() => this.handlePressTheme(styles.$green)}
                selected
                checkmark={false}
                iconBackground={styles.$green}
            />

            <ListItem
                text="Purple"
                onPress={() => this.handlePressTheme(styles.$purple)}
                selected
                checkmark={false}
                iconBackground={styles.$purple}
            />
          </ScrollView>;
    }
}

export default connect()(Theme);