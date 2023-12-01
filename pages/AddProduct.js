import React, { useState } from "react";
import { View, Alert, SafeAreaView, ScrollView, KeyboardAvoidingView } from "react-native";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput";
import * as SQLite from "expo-sqlite";
import styles from "../css/AddStyle";
const db = SQLite.openDatabase("Store.db");
export default function AddProduct({ navigation }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const addProduct = () => {
    console.log(name, price, quantity);

    if (!name || !price || !quantity) {
      Alert.alert("Error", "Fill all the fields");
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO ProductsTable (name, price, quantity) VALUES (?,?,?)",
        [name, price, quantity],
        (tx, result) => {
          console.log("Result: ", result.rowsAffected);
          if (result.rowsAffected > 0) {
            console.log("Data successfully inserted.");
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
            console.log("Data insertion failed");
            Alert.alert("Alert", "Failed to add data!");
          }
        },
        (error) => {
          console.log("Error: ", error);
          Alert.alert("Error", "Під час додавання даних виникла помилка");
        }
      );
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView behavior="padding">
            <MyInput
              placeholder="Enter product name"
              onChangeText={(name) => setName(name)}
              style={styles.input}
            />
            <MyInput
              placeholder="Enter price"
              onChangeText={(price) => setPrice(price)}
              style={styles.input}
              keyboardType="numeric"
            />
            <MyInput
              placeholder="Enter quantity"
              onChangeText={(quantity) => setQuantity(quantity)}
              keyboardType="numeric"
              style={styles.input}
            />
            <MyButton title="Add" customClick={addProduct} style={styles.addButton} />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


