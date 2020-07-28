import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";

const RateFarmer = () => {
  


  return (
     //<View>
      <View style={styles.container}>
        <Text>welcom Rate Farmer</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green", //'#48BBEC
    justifyContent: "center",
    padding: 30,
  },
  products: {
    marginTop: 24,
    padding: 40,
    backgroundColor: "purple",
    fontSize: 50,
  },
  Usertitle: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
    color: "yellow",
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
  searchInput: {
    height: 50,
    padding: 5,
    margin: 5,
    marginRight: 5,
    fontSize: 22,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    color: "white",
  },
  buttonText: {
    fontSize: 20,
    color: "#111",
    alignSelf: "center",
  },
  button: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  error: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
export default RateFarmer;
