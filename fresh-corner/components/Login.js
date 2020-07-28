import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import axios from 'axios'


const Login =  ({ navigation: { navigate } }) => {
     const [userLog, setUserLog] = React.useState({
        email: '', 
        password: '',
      
    })


/*** ===== Use a private ip address to connect (to soleve network proplem)==== ***/
//***** my= 172.18.7.166  142= 172.19.142.90 ... Maclaglin= 10.10.48.104 localhost repleced by  
/***ip address because of network, and the ip address might be changable {ipconfig}****/
    const UserLoginHandler = async () => { 

    try {
        const { email, password } = userLog;
        
        const result = await axios.post('/customers/login', { email, password })
        axios.defaults.headers.common['Authorization']=`${result.data.token}`

       if(result.data.token){

        console.log("from risult", result);
           /**** This is How I stor Token  in asyncStorage****/ 
        await AsyncStorage.setItem('token',result.data.token)

        console.log('from login Token', result.data.token)
        alert("welcom to Farme List!")
         navigate('FarmersList')
       }

    } catch (error) {
        console.log(error)
        setUserLog(prev => ({ ...prev, error: "Invalid username or password" }))
    }
     console.log('From Log in', userLog.email, userLog.password)
      
    }
    
    
    return (
        

        <View style={styles.container}>
             <Text style={{color:'brown', margin:20, fontSize:20, fontFamily:'timenewroman'}} >User Login</Text>
           <View style={styles.inputContainer}>
             <TextInput style={styles.inputs}
                placeholder={'Your Email must have .com ...'}
                onChangeText={user => setUserLog({ ...userLog, email: user })}
                value={userLog.email}
            />
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/flat_round/40/000000/secured-letter.png'}}/>
            </View>
            <View style={styles.inputContainer}>
     <TextInput style={styles.inputs}
                placeholder={'Enter Password ...'}
                onChangeText={user => setUserLog({ ...userLog, password: user })}
                value={userLog.password}
                
            />
            
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={UserLoginHandler}
        
            >
            <Text style={styles.button}>Login</Text>

            </TouchableOpacity>
            {userLog.error && <Text style={styles.title}>{userLog.error}</Text>}
             <View>
             <Text style={{color:'white', alignItems:'center', margin:20, fontSize:25,fontFamily:'timenewroman'}}>=====Get Fresh!, Feel Fresh=====</Text>
            <Image source={{ uri:'https://wonderopolis.org/wp-content/uploads/2016/12/Plants_Make_Fruits_and_Vegetablesdreamstime_xxl_10601543.jpg' }}
             style={{ width: 370, height: 210, flex:1, paddingBottom:10,margin:20}}
                    />
            </View>
            
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
      alignItems:'center',
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
        fontSize: 20,
        textAlign: 'center',
        color:'brown'
    },
    inputIcon:{
        width:30,
        height:30,
        marginRight:15,
        justifyContent: 'center'
      },
    login: {
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
        
    }
    
});
export default Login;