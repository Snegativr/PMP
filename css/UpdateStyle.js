import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#FFEDC0",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
    },
    view: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#1c1c1c",
        width: 350,
    },
    input: {
        padding: 10,
        width: 250,
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
    },

});
export default styles;