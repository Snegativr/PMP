import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Mytext(props) {
  return <Text style={styles.text}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "#1c1c1c",
    fontSize: 25,
    margin: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});
