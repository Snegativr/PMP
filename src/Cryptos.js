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
            <Text style={styles.cryptoName}>{crypto.name}</Text>
            <Text style={styles.cryptoPrice}>{crypto.price} $</Text>
            <Button title='Add to Cart' onPress={() => this.addCrypto(crypto)}/>
          </View>
        ))}
      </View>
    );
  };
  renderCryptosCartRow = (cryptos) => {
    return (
      <View style={styles.cryptosRow}>
        {cryptos.map((crypto, index) => (
          <View style={styles.cryptoItem} key={index}>
            <Text style={styles.cryptoName}>{crypto.name}</Text>
            <Text style={styles.cryptoPrice}>{crypto.price} $</Text>
            <Button title='Remove from Cart' onPress={() => this.removeCrypto(crypto)}/>
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
          {this.renderCryptosRow(cryptos.slice(0, 3))}
          {this.renderCryptosRow(cryptos.slice(3, 6))}
          {this.renderCryptosRow(cryptos.slice(6, 9))}
          {this.renderCryptosRow(cryptos.slice(9, 12))}
        </ScrollView>

        <View style={styles.separator} />

        <Text style={styles.title}>Cryptos Cart</Text>
        <ScrollView keyboardShouldPersistTaps="always">
          {this.renderCryptosCartRow(cryptos_cart.slice(0, 3))}
          {this.renderCryptosCartRow(cryptos_cart.slice(3, 6))}
          {this.renderCryptosCartRow(cryptos_cart.slice(6, 9))}
          {this.renderCryptosCartRow(cryptos_cart.slice(9, 12))}
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
    backgroundColor: '#fff',
  },
  cryptoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
  },
  
  cryptoPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
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
    backgroundColor: '#ecf0f1',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
    marginTopTop: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#e74c3c',
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
