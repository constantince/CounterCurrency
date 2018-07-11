import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { InputWidthButton } from '../components/TextInput';
import { Logo } from '../components/Logo';
import { Words } from '../components/Text';
import { Buttons } from '../components/Button';
import { connect } from "react-redux";
import { changeBaseAmount } from "../Actions/action";
import connectAlert from './../components/Alert/connectAlert';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    currencyError: PropTypes.string,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currencyError) {
      this.props.alertWithType("error", "Error", nextProps.currencyError);
    }
  }

  handleChangeText = () => {
    console.log("change text");
  };

  handlePressBaseCurrency = () => {
    console.log("press base currency");
    this.props.navigation.navigate("CurrencyList", {
      title: "Base Currency",
      type: "base"
    });
  };

  handlePressQuoteCurrency = () => {
    console.log("press quote currency");
    this.props.navigation.navigate("CurrencyList", {
      title: "Quote Currency",
      type: "quote"
    });
  };

  handleSwapCurrency = () => {
    console.log("handle swap currency");
  };

  handleSwapCurrency = () => {
    console.log("handle swap currency");
  };

  handleOptionsPress = () => {
    console.log("options press");
    this.props.navigation.navigate("Options");
  };

  render() {
    const { amount, base, quote, conversions, primaryColor } = this.props;
    const rate = conversions[base].rates[quote];
    const { isFetching, date } = conversions[base];
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={primaryColor} />
          <InputWidthButton
            editable={true}
            buttonText={base}
            onPress={this.handlePressBaseCurrency}
            value={amount}
            changeAmount={value => {
              this.props.dispatch(changeBaseAmount(value));
            }}
          />
          <InputWidthButton
            editable={false}
            buttonText={quote}
            onPress={this.handlePressQuoteCurrency}
            value={isFetching ? "..." : String((rate * amount).toFixed(2))}
          />
          <Words date={date} base={base} quote={quote} currencies={rate} />
          <Buttons
            buttonText="Reverse Currencies"
            onPress={() => {
              this.props.dispatch({
                type: "GET_CURRENCY",
                value: quote,
                other: base
              });
            }}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProp = state => ({
  base: state.currencies.baseCurrency,
  quote: state.currencies.quoteCurrency,
  amount: state.currencies.amount,
  conversions: state.currencies.conversions,
  primaryColor: state.themes.primaryColor,
  currencyError: state.currencies.error
});

export default connect(mapStateToProp)(connectAlert(Home));
