import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
//import {keyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
  import axios from 'axios';



const Signup  = ({ navigation: { navigate } }) => {
        
 const  [newUser, setNewUser] = React.useState({
        fname: '',
        email: '',
        password: '',
        
   })
  
   /*** ===== Use a private ip address to connect (to soleve network proplem)==== ***/
//http://localhost:5000/customers/signup //http://172.18.7.102:5000/signin///10.10.48.104(maclaglin) (myDorm, 172.18.7.166) (p= 172.19.142.143)
    const UserSignupHandler = async() => {
       
        try {
             const { fname, email, password } = newUser;
            console.log("when user signup", newUser)
            console.log(newUser)  
            const result = await axios.post('/customers/signup',
            {fname:fname, email:email, password:password} )
            console.log("axios result",result)
            navigate('Home')   
        } catch (error) {
            console.log(error.messag);
            setNewUser(prev => ({ ...prev, error: "Ooops..Invalid username or password" })) 
        }
    }
   
     return (
        // <KeyboardAwareScrollView >
        <View style={styles.container}>
        <Image style={styles.bgImage} source={{ uri: "https://lorempixel.com/900/1400/nightlife/8/" }}/>
            <Text style={{color:'brown', margin:20, fontSize:20, fontFamily:'timenewroman'}} > Wel Come New User!</Text>
         <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder={'Enter userName please'}
                onChangeText={item => { setNewUser({ ...newUser, fname: item }) }}
                value={newUser.fname}
            />
             <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/circled-user-male-skin-type-3.png'}}/>
             </View>
             <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder={'Your Email please'}
                onChangeText={item => { setNewUser({ ...newUser, email: item }) }}
                value={newUser.email}
            />
             <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/flat_round/40/000000/secured-letter.png'}}/>
            </View>
            <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder={'Enter Password please'}
                onChangeText={item => { setNewUser({ ...newUser, password: item }) }}
                value={newUser.password}
            />
             <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
        </View>
            <TouchableOpacity
                style={styles.button}
                onPress={UserSignupHandler}
            //value={}
            >
                <Text style={styles.button}>Submit</Text>

            </TouchableOpacity>
            <Text style={{color:'white', alignItems:'center', margin:20, fontSize:25,fontFamily:'timenewroman'}}>==Get Fresh!, Feel Fresh===</Text>
            <Image
            
              source={{ uri:'https://wonderopolis.org/wp-content/uploads/2016/12/Plants_Make_Fruits_and_Vegetablesdreamstime_xxl_10601543.jpg' }}
             style={{ width: 370, height: 150, flex:1, paddingBottom:10,margin:20}}
                    />
        </View>
        


  )
 };

const styles = StyleSheet.create({
    container: {
        flex: 1,
     backgroundColor: 'gray', 
      padding: 8,
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      color:'brown',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:300,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
    
        shadowColor: "#808080",
        shadowOffset: {
          width: 0,
          height: 2,
        },
       
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
      },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    inputIcon:{
        width:30,
        height:30,
        marginRight:15,
        justifyContent: 'center'
      },
    signin: {
        height: 50,
        padding: 5,
        margin: 5,
        marginRight: 5,
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 8,
        borderColor:'black',
        color: 'brown'
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
   
});

export default Signup;