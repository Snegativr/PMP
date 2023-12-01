import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MyButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#146e50",
    color: "#ffffff",
    padding: 10,
    margin: 10,
    borderColor: "#1c1c1c",
    borderRadius: 15,
    borderWidth: 3,
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
  },
});
