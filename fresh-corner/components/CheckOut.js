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

const CheckOut = (props) => {
  const cartData = params.data
  

  return (
     
      <View style={styles.container}>
        <Text style={{color:'brown', margin:20, fontSize:20, fontFamily:'timenewroman'}}>Please checkOut here</Text>
        <TouchableOpacity
        style={styles.button}
         onPress={()=>checkOut()}>
                
         <Text>Pay</Text>
        </TouchableOpacity>  
        
    </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    padding: 30,
  },
  farmers: {
    marginTop: 24,
    padding: 40,
    backgroundColor: "white",
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
    color:"brown",
  },
  
  button: {
    height: 20,
    flexDirection: "row",
    backgroundColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "blue",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
 
});
export default CheckOut;
