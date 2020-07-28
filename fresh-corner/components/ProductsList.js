import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  AsyncStorage,
  FlatList,
  
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import axios from "axios";

const ProductsList = ({ route: { params }, navigation: { navigate } }) => {
  const farm = params.data;

  console.log("farm recived from oproduct list ------------", farm);

  
  const addToCart = async (prod) => {

    console.log("from  product list to cart", prod);
    try {
      console.log("send to cart Back End", prod);
      let token = await AsyncStorage.getItem("token")
      // const header= {headers:{"Content-Type": "application/json",'Authorization':token}};
      console.log('token from add to cart--------------------------------------',token);
    let body =JSON.stringify(prod);
      console.log("BODY PRODUCT--->", body)
      const cartItem = await axios.post(
        "/customers/addcarts",
        prod,{headers:{'Authorization':token}}
      );
      console.log("axios result for cart", cartItem);
      //navigate("CART");
      alert("seccessfully added to cart!")
    } catch (error) {
      console.log("from add to cart", error.message);
    }
  };

  return (
   
      /************************ScrollView> **************************/
      <View>
      <View style={styles.container}>
        <Text  style={{color:'brown', margin:20, fontSize:20, fontFamily:'timenewroman'}}>Welcome Products List!</Text>
      </View>
      <ScrollView >
        <View>
          {farm.products ? (
            farm.products.map((prod) => {
              return (
                <View  style={styles.container}>
                  <View  style={styles.products} key={prod.id}>
                    <Text > {prod.prodName} </Text>
                    <Text > {prod.price}</Text>
                    <Text > {prod.prodInfo}</Text>
                       
                    <Image
                      source={{ uri: prod.image }}
                      style={{ width: 350, height: 150 }}
                    />
                    <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}></View>
                    <View style={styles.socialBarSection}></View>
                    

                    </View>
                       <TouchableOpacity
                      style={styles.button}
                      onPress={()=> {addToCart(prod)}}
                    >
                     
                      <Text style={styles.buttonText}>Add To Cart</Text>
                    </TouchableOpacity>  
                      
                      <TouchableOpacity
                     style={styles.button}
                      onPress={()=> navigate("CART",{data:farm._id})}>
                         {/* onPress={()=> navigate("CART", {id:farm} )}>   */}
                
                      <Text>Your Cart List</Text>
                    </TouchableOpacity>  
                  </View>
                </View>
              );
            })
          ) : (
            <Text>No products! </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "grey", 
    marginTop: 24,
    padding: 10,
    fontSize: 25,
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
    color:"brown",
  },

  button: {
    padding: 8,
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center',
    height: 50,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'aqua' 
},
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  
  
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});
export default ProductsList;

{/* <TouchableOpacity style={styles.button} onPress={() => addToCart(prod)}>
  <Text style={styles.buttonText}>Add To Cart</Text>
</TouchableOpacity>; */}
