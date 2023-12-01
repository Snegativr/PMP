import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function MyInput(props) {
  return (
    <View style={styles.view}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#1c1c1c"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop: 10,
    borderColor: "#146e50",
    borderWidth: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
