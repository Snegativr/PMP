import React, { useState } from "react";
import { View, ScrollView, KeyboardAvoidingView, Alert, SafeAreaView } from "react-native";
import MyInput from "./components/MyInput";
import MyButton from "./components/MyButton";
import * as SQLite from "expo-sqlite";
import styles from "../css/UpdateStyle";
const db = SQLite.openDatabase("Store.db");

export default function UpdateProduct({ navigation }) {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const updateAllStates = (name, price, quantity) => {
    setProductName(name);
    setProductPrice(price);
    setProductQuantity(quantity);
  };

  const searchProduct = () => {
    console.log(productId);

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM ProductsTable WHERE id=?",
        [productId],
        (tx, result) => {
          const len = result.rows.length;
          if (len > 0) {
            const res = result.rows.item(0);
            updateAllStates(res.name, res.price, res.quantity);
          } else {
            Alert.alert("Alert", "Product not found");
            updateAllStates("", "", "");
          }
        }
      );
    });
  };

  const updateProduct = () => {
    console.log(productId, productName, productPrice, productQuantity);

    if (!productId || !productName || !productPrice || !productQuantity) {
      Alert.alert("Alert", "Fill the empty fields");
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE ProductsTable SET name=?, price=?, quantity=? WHERE id=?",
        [productName, productPrice, productQuantity, productId],
        (tx, result) => {
          console.log("Result: ", result.rowsAffected);
          if (result.rowsAffected > 0) {
            Alert.alert(
              "Alert",
              "Success!",
              [
                {
                  text: "Ок",
                  onPress: () => navigation.navigate("HomeScreen"),
                },
              ],
              { cancelable: false }
            );
          } else {
            console.log("Data update failed");
            Alert.alert("Alert", "Data wasn't updated!");
          }
        },
        (error) => {
          console.log("Error: ", error);
          Alert.alert("Error", "While updating data error occurred");
        }
      );
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: "space-between" }}
          >
            <MyInput
              placeholder="Enter product id"
              style={styles.input}
              onChangeText={(productId) => setProductId(productId)}
            />
            <MyButton title="Search product" customClick={searchProduct} />
            <MyInput
              placeholder="Enter name"
              value={productName}
              style={styles.input}
              onChangeText={(productName) => setProductName(productName)}
            />
            <MyInput
              placeholder="Enter price"
              value={productPrice.toString()}
              onChangeText={(productPrice) => setProductPrice(productPrice)}
              style={styles.input}
              keyboardType="numeric"
            />
            <MyInput
              value={productQuantity.toString()}
              placeholder="Enter quantity"
              onChangeText={(productQuantity) =>
                setProductQuantity(productQuantity)
              }
              style={styles.input}
              keyboardType="numeric"
            />
            <MyButton title="Update product" customClick={updateProduct} />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


