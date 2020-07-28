import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
/***My componets ***/
 import  Login  from "./components/Login";
 import  Signup  from "./components/Signup";
 import  FarmersList  from "./components/FarmersList";
 import  ProductsList  from "./components/ProductsList";
 import Cart  from './components/Cart';
import Order  from './components/Order';
import OrderHistory from './components/OrderHistory';
import CheckOut from './components/CheckOut';
import RateFarmer from './components/RateFarmer';
import axios from 'axios'

const myTab = createMaterialBottomTabNavigator();
const myStack = createStackNavigator();
axios.defaults.baseURL ='http://localhost:2020';

const StackNavigator = () => (<myStack.Navigator>
  <myStack.Screen name="Home" component={Login} />
  <myStack.Screen name="FarmersList" component={FarmersList} options={{ title: 'Home page' }} />
  <myStack.Screen name="ProductsList" component={ProductsList} options={{ title: 'Product List' }} />
  <myStack.Screen name="CART" component={Cart} options={{ title: 'Your Cart' }} />
  <myStack.Screen name="CHECKOUT" component={CheckOut} options={{ title: ' CheckOut Here' }} />
  <myStack.Screen name="OrderHistory" component={OrderHistory} options={{ title: 'Rate Farmer' }} />
  <myStack.Screen name="RATE" component={RateFarmer} options={{ title: 'Rate Farmer' }} />
 
</myStack.Navigator>)


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Amele amele</Text>
    // </View>
    <NavigationContainer>
    <myTab.Navigator initialRouteName='HOME'>
      <myTab.Screen
        name='User'
        component={StackNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="login" color={color} size={26} />
        }}
      />
      <myTab.Screen
        name='New User'
        component={Signup}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-plus" color={color} size={26}   />
        }}
      />
    </myTab.Navigator>
  </NavigationContainer>
  
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
