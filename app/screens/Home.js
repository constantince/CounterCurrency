import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { InputWidthButton } from '../components/TextInput';
import { Logo } from '../components/Logo';
import { Words } from '../components/Text';
import { Buttons } from '../components/Button';
const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;

class Home extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  handleChangeText = () => {
    console.log('change text');
  };

  handlePressBaseCurrency = () => {
    console.log('press base currency');
    this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote currency');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleSwapCurrency = () => {
    console.log('handle swap currency');
  };

  handleSwapCurrency = () => {
    console.log('handle swap currency');
  };

  handleOptionsPress = () => {
    console.log('options press');
    this.props.navigation.navigate("Options");
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWidthButton
            editable={true}
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            value={TEMP_BASE_PRICE}
          />
          <InputWidthButton
            editable={false}
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            value={TEMP_QUOTE_PRICE}
          />
          <Words
            date={TEMP_LAST_CONVERTED}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <Buttons buttonText="Reverse Currencies" />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
