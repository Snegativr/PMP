import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native';
import { addCrypto, removeCrypto } from './actions';

import { connect } from 'react-redux';

const initialState = {
  name: '',
  price: 0,
};

class Cryptos extends React.Component {
  state = initialState;

  updateInput = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  addCrypto = (crypto) => {
    this.props.dispatchAddCrypto(crypto);
  };

  removeCrypto = (crypto) => {
    this.props.dispatchRemoveCrypto(crypto);
  };

  calculateTotal = () => {
    return this.props.cryptos_cart.reduce((sum, crypto) => sum + crypto.price, 0);
  };

  renderCryptosRow = (cryptos) => {
    return (
      <View style={styles.cryptosRow}>
        {cryptos.map((crypto, index) => (
          <View style={styles.cryptoItem} key={index}>
            <Text>{crypto.name}</Text>
            <Text>{crypto.price} $</Text>
            <Button title='Add to Cart' onPress={() => this.addCrypto(crypto)}/>
          </View>
        ))}
      </View>
    );
  };

  render() {
    const { cryptos, cryptos_cart } = this.props;
    const total = this.calculateTotal();

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Cryptos</Text>
        <ScrollView keyboardShouldPersistTaps="always">
          {this.renderCryptosRow(cryptos.slice(0, 2))}
          {this.renderCryptosRow(cryptos.slice(2, 4))}
          {this.renderCryptosRow(cryptos.slice(4, 6))}
          {this.renderCryptosRow(cryptos.slice(6, 8))}
        </ScrollView>

        <View style={styles.separator} />

        <Text style={styles.title}>Cryptos Cart</Text>
        <ScrollView keyboardShouldPersistTaps="always">
          {cryptos_cart.map((crypto, index) => (
            <View style={styles.cryptoItem} key={index}>
              <Text>{crypto.name}</Text>
              <Text>{crypto.price}</Text>
              <Button title='Remove from Cart' onPress={() => this.removeCrypto(crypto)}/>
            </View>
          ))}
          <Text style={styles.total}>Total cost: {total} $</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 25,
  },
  cryptosRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cryptoItem: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
    marginHorizontal: 8,
    alignItems:'center',
    justifyContent:'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

const mapStateToProps = (state) => ({
  cryptos: state.cryptoReducer.cryptos,
  cryptos_cart: state.cryptoReducer.cryptos_cart,
});

const mapDispatchToProps = {
  dispatchAddCrypto: (crypto) => addCrypto(crypto),
  dispatchRemoveCrypto: (crypto) => removeCrypto(crypto),
};

export default connect(mapStateToProps, mapDispatchToProps)(Cryptos);
