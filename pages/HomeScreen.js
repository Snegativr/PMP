import React, { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import MyButton from "./components/MyButton";
import MyText from "./components/MyText";
import styles from "../css/HomeStyle";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("Store.db");

export default function HomeScreen({ navigation }) {
  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS ProductsTable (id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(255), price REAL, quantity INTEGER);",
        [],
        (tx, res) => {
          console.log('Table "ProductsTable" created successfully.');
        },
        (error) => {
          console.log("error" + error.message);
        }
      );
    });
  };

  useEffect(() => {
    createTable();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <MyText text="Online shop" />
        <View style={styles.buttonContainer}>
          <MyButton
            title="Add product"
            customClick={() => navigation.navigate("AddProduct")}
          />
          <MyButton
            title="Update product"
            customClick={() => navigation.navigate("UpdateProduct")}
          />
          <MyButton
            title="View all products"
            customClick={() => navigation.navigate("ViewAllProducts")}
          />
          <MyButton
            title="Delete product"
            customClick={() => navigation.navigate("DeleteProduct")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}




