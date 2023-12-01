import React, { useState, useEffect } from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";
import * as SQLite from "expo-sqlite";
import styles from "../css/ViewAllStyle";
const db = SQLite.openDatabase("Store.db");

export default function ViewAllProducts() {
  const [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM ProductsTable", [], (tx, result) => {
        var temp = [];
        for (let i = 0; i < result.rows.length; ++i)
          temp.push(result.rows.item(i));
        setFlatListItems(temp);
      });
    });
  }, []);

  const listItemView = (item) => {
    const totalPrice = item.price * item.quantity;
    return (
      <View key={item.id} style={styles.view}>
        <Text style={styles.text}>Id: {item.id}</Text>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Price: {item.price} UAH / {(item.price / 38).toFixed(2)} $</Text>
        <Text style={styles.text}>Quantity: {item.quantity}</Text>
        <Text style={styles.text}>Total price: {totalPrice} UAH / {(totalPrice / 38).toFixed(2)} $</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <FlatList
          data={flatListItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => listItemView(item)}
        />
      </View>
    </SafeAreaView>
  );
}


