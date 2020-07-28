import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  FlatList,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const FarmersList = (props) => {
  //let token = await AsyncStorage.getItem(token)
  const [farmData, setFarmData] = React.useState({ data: [] });
  console.log("GET FARMER LIST--->", farmData.data);

  const getAllFarmers = async () => {
    try {
      let token = await AsyncStorage.getItem(token);
      console.log("ASYNC STORAGE--->", token);
      let result = await axios.get("/customers/farmer", {
        headers: { Authorization: token },
      });
      console.log(" from web back =======", result);
      setFarmData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFarmers();
  }, []);

  const productDetail = (item) => {
    console.log("From farmers list  what is in the item", item);
    props.navigation.navigate("ProductsList", { data: item });
  };

  return (
    <View style={styles.container}>
      <Text style={{color:'brown', margin:20, fontSize:20, fontFamily:'timenewroman'}}>WelCome to Famers List</Text>
      <>
        <FlatList
        style={styles.farmList}
        contentContainerStyle={styles.farmstyle}
          data={farmData}
          horizontal={false}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                productDetail(item);
              }}>
              <View style={styles.farmers}>
                <Text>{item.farmName}</Text>
                <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/heart/office/40/2ecc71'}}/>
                <Text style={styles.info}>98% Like</Text>
              </View>
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
  farmList: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6" 
  },
  farmstyle:{
    alignItems:'center'
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
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:60,
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  icon: {
    width:20,
    height:20,
  },
  info:{
    fontSize:22,
    color: "#696969",
  }
 
});
export default FarmersList;

// return(
//     <View key={farm.key}>
//         <Text style={styles.farmers}> {farm.farmName} </Text>
//          </View>
//         )
// }) :<Text> No Farmers today go Home !!! </Text> }

{
  /* <View>
      <View style={styles.container}>
        <Text>welcom Farmers List</Text>
      
        <ScrollView>
           {farmData ?  farmData.map((farm) => {
              return (
                <TouchableOpacity style={styles.button} onPress={getAllFarmers}>
                <Text style={styles.buttonText}>Farm List</Text>
              </TouchableOpacity>
                <View key={farm._id}>
                  <Text style={styles.farmers}> {farm.farmName} </Text>

                  <TouchableOpacity style={styles.button} onPress={()=>productDetail(farm)}>
              <Text style={styles.buttonText}>products</Text>
            </TouchableOpacity>
                </View>
              );
              }) : <Text> No Farmers today go Home !!! </Text>}
          
        </ScrollView>
      </View>
    </View>
  ); */
}
