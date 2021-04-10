import React from 'react'
import { StyleSheet, Text, View,  } from 'react-native'
import {Button} from 'react-native-paper'


const RegisterScreen = ({navigation}) => {

    const isNGO = true;

    const registerUserFunc = () => {
        navigation.navigate("RegisterUser") 
        console.log("Logged in as User")        
    } 

    const registerNGOFunc = () => {
        navigation.navigate("RegisterNGO") 
        console.log("Logged in as NGO") 
        
    } 

    return (
        <View style={styles.container}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.HeadingSplash}>UNIFY</Text>
                <Text style={styles.subHeading}>Volunteering for a better tomorrow</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button 
                    mode="contained"
                    style={styles.buttonUser} 
                    color="black" 
                    title="USER Login" 
                    onPress={registerUserFunc}
                    isNGO={false} 
                    labelStyle={{
                        color:'white',
                        fontWeight:"900"
                    }}
                >
                    USER Login
                </Button>
                <Button 
                    mode="contained"
                    style={styles.buttonNGO} 
                    color="black" 
                    title="NGO Login" 
                    onPress={registerNGOFunc} 
                    isNGO={true}
                    labelStyle={{
                        color:'white',
                        fontWeight:"900"    
                    }}
                >
                    NGO Login
                </Button>
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    HeadingSplash:{
        fontSize:55,
        fontFamily: "Heavitas",
        paddingBottom: 50,
    },
    subHeading:{
        fontSize:20,
        fontFamily:"Brush Script MT",
        marginTop:-60,
        paddingBottom:50,
    },
    buttonUser:{
        marginLeft:15,
        width:150,
        height:35
    },
    buttonNGO:{
        marginLeft:15,
        width:150,
        height:35
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    }
})
