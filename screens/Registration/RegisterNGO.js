import React, {useState, useLayoutEffect} from 'react';
import { StyleSheet,  View, KeyboardAvoidingView } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { Text, Button, } from 'react-native';
import {TextInput, Image} from 'react-native-paper';


const RegisterScreen = ( {navigation} ) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:"Back to Login",
        });
    }, [navigation]);

    const register = () => {
        console.log('registered');
        navigation.navigate("LoginPage")
    }

    return (
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <StatusBar style="light"/>
            <View style={{justifyContent:'center', alignItems:'center'}} >
                <Text style={styles.title} >Register - NGO</Text>
            </View>
	        

            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.TextInput}
                    label="Name of your NGO" 
                    autoFocus                     
                    underlineColor="#1f1d1c"
                    type="text"
                    value={name}
                    onChangeText={text => { setName(text) } }
                    theme={{
                        colors: {
                                   placeholder: '#cf4404',text: 'white', primary: '#cf4404',
                                   underlineColor: 'transparent', background: '#003489'
                           }
                     }}
                />
                <TextInput 
                    style={styles.TextInput}
                    label="Email Address" 
                    type="Email"
                    value={email}
                    onChangeText={text => { setEmail(text) } }
                    theme={{
                        colors: {
                                   placeholder: '#cf4404',text: 'white', primary: '#cf4404',
                                   underlineColor: 'transparent', background: '#003489'
                           }
                     }}
                />
                <TextInput 
                    style={styles.TextInput}
                    label="Password" 
                    secureTextEntry 
                    type="password"
                    value={password}
                    onChangeText={text => { setPassword(text) } }
                    theme={{
                        colors: {
                                   placeholder: '#cf4404', text: 'white', primary: '#cf4404',
                                   underlineColor: 'transparent', background: '#003489'
                           }
                     }}
                />
                <TextInput 
                    style={styles.TextInput}
                    label="Phone Number" 
                    type="text"
                    value={phonenumber}
                    onChangeText={text => { setPhoneNumber(text) } }
                    theme={{
                        colors: {
                                   placeholder: '#cf4404',text: 'white', primary: '#cf4404',
                                   underlineColor: 'transparent', background: '#003489'
                           }
                     }}
                />
                <TextInput 
                    style={styles.TextInput}
                    label="Address" 
                    type="text"
                    value={address}
                    onChangeText={text => { setAddress(text) } }
                    theme={{
                        colors: {
                                   placeholder: '#cf4404',text: 'white', primary: '#cf4404',
                                   underlineColor: 'transparent', background: '#003489'
                           }
                     }}
                />
                <TextInput 
                    style={styles.TextInput}
                    label="Profile Picture" 
                    type="text"
                    value={imageUrl}
                    onChangeText={text => { setImageUrl(text) } }
                    onSubmitEditing={register}
                    theme={{
                        colors: {
                                   placeholder: '#cf4404',text: 'white', primary: '#cf4404',
                                   underlineColor: 'transparent', background: '#003489'
                           }
                     }}
                />

            </View>

            <Button containerStyle={styles.button} onPress={register} title="Register!" raised color="#b83a00" />

        </KeyboardAvoidingView>
    )
};

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "black"
    },title:{
        color:"#cf4404",
        fontFamily:"heavitas", fontSize:20, 
        paddingTop:10, 
        marginBottom:55, marginTop:15,  
        textShadowColor: 'rgba(255, 49, 13, 8)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 15,
        fontSize:30,
    },
    button:{
        width:200,
        marginTop:10,
        marginBottom:300
    },
    inputContainer:{
        width:275,
        flex:1
    },
    TextInput:{
        marginVertical:10,
        backgroundColor:"#1f1d1c",        
        borderRadius:15,
        color:"white"
    }
})


