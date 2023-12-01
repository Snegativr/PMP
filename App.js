import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import DeleteProduct from "./pages/DeleteProduct";
import ViewAllProducts from "./pages/ViewAllProducts";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home Screen",
            headerStyle: {
              backgroundColor: "#ff6347",
            },
            headerTintColor: "#2e2e2e",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="ViewAllProducts"
          component={ViewAllProducts}
          options={{
            title: "View All Products",
            headerStyle: {
              backgroundColor: "#ff6347",
            },
            headerTintColor: "#2e2e2e",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="UpdateProduct"
          component={UpdateProduct}
          options={{
            title: "Update Product",
            headerStyle: {
              backgroundColor: "#ff6347",
            },
            headerTintColor: "#2e2e2e",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{
            title: "Add Product",
            headerStyle: {
              backgroundColor: "#ff6347",
            },
            headerTintColor: "#2e2e2e",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="DeleteProduct"
          component={DeleteProduct}
          options={{
            title: "Delete Product",
            headerStyle: {
              backgroundColor: "#ff6347",
            },
            headerTintColor: "#2e2e2e",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}