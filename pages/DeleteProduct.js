import React, { useState } from "react";
import { View, Alert, SafeAreaView } from "react-native";
import MyInput from "./components/MyInput";
import MyButton from "./components/MyButton";
import styles from "../css/DeleteStyle";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("Store.db");

export default function DeleteProduct({ navigation }) {
  const [productId, setProductId] = useState("");

  const deleteProduct = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM ProductsTable WHERE id=?`,
        [productId],
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
            console.log("Data delete failed");
            Alert.alert(
              "Alert",
              "Deleting failed, enter correct id!"
            );
          }
        }
      );
    });
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <MyInput
          placeholder="Enter product id"
          onChangeText={(productId) => setProductId(productId)}
          style={styles.input}
        />
        <MyButton title="Delete product" customClick={deleteProduct} />
      </View>
    </SafeAreaView>
  );
}
