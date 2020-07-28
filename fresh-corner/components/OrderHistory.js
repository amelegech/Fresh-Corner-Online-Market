import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import axios from "axios";
import Axios from "axios";

const OrderHistory = () => {

  const [orderData, setOrderData] = React.useState({ data: [] });
  //console.log('Orderlist from order history', orderData.data)

  let OrderList= async ()=>{


try {
  let result = await Axios.get("/customers/orderlist")

  console.log('from order list axios result',result);
  setOrderData(result.data.ProdList);
  console.log('After set state', result.data.data);
} catch (error) {
  

  console.log(error);
}

  }

useEffect(() => {
  OrderList();
}, []);

  return (

    <View style={styles.container}>
      <Text style={{color:'brown', margin:20, fontSize:20, fontFamily:'timenewroman'}}>Your Orders So Far!</Text>
      <>
        <FlatList
          data={orderData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                rateFarmer();
              }}>
              <View style={styles.farmers}>
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => {
            item._id;
          }}
        />
      </>
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
export default OrderHistory;
