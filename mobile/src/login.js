import React from 'react'
import {View,TouchableOpacity,Image,StyleSheet,TextInput,Text} from 'react-native'
import Logo from './assets/logo.png'
//import SafeAreaView from 'react-native-safe-area-view';

function Login({navigation}){

    function HandleSubmit(){
        navigation.navigate('Main')
    }

    return(

        <View style={styles.container}>
           
            
            <Image 
            styles={styles.view_image}
            source={Logo}
            />
            
           
       
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder='Ola digite o seu nome'
        placeholderTextColor='#9a73ef'
        backgroundColor='white'
        style={styles.input}
        ></TextInput>
        
        <TouchableOpacity style={styles.button} onPress={HandleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#1e293a',
        paddingLeft:20,
        paddingRight:20
        },
    Text:{
        fontFamily:'arial',
        color:'white',
        display:'flex',
        backgroundColor:'tomato',
        letterSpacing:5,
        textAlign:'center',
        padding:10,
        paddingLeft:10,
        alignSelf:'center'
    },
    view_image:{
        width:'504',
        paddingLeft:9,
        borderRadius:50
    },
    input:{
        alignSelf:"stretch",
        textAlign:'center',
        height:46,
        backgroundColor:'#fff',
        paddingHorizontal:15,
        borderWidth:1,
        borderRadius:4,
        borderColor:'#ddd',
        marginTop:10
    },
    button:{
        margin:19,
        padding:10,
        alignSelf:'stretch',
        backgroundColor:'#df4723',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff'
    }
})

export default Login;