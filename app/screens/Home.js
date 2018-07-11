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

const INIT_BASE_CURRENY = 'USD';
const INIT_QUOTE_CURRENY = 'CNY';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    currencyError: PropTypes.string
  };
  //初始化数据
  componentWillMount() {
    const { dispatch  } = this.props;
    dispatch({
      type: "GET_CURRENCY",
      value: INIT_BASE_CURRENY,
      other: INIT_QUOTE_CURRENY
    });
  }
  //错误处理
  componentWillReceiveProps(nextProps) {
    if (nextProps.currencyError) {
      this.props.alertWithType("error", "Error", nextProps.currencyError);
    }
  }
  //切换基础汇率单位
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate("CurrencyList", {
      title: "Base Currency",
      type: "base"
    });
  };
  //切换目标汇率单位
  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate("CurrencyList", {
      title: "Quote Currency",
      type: "quote"
    });
  };
  //路由到设置界面
  handleOptionsPress = () => {
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
