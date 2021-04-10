import React from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions, Button } from 'react-native'
import { StackActions } from "@react-navigation/routers/src/StackRouter";

const onboardingItem = ({item, navigation}) => {

    const {width} = useWindowDimensions();    

    return (
        <View style={[styles.container, {width}]}>
            <View style={{flex:0.3}} >
                <Text style={styles.title} >{item.title}</Text>
                <Text style={styles.description} >{item.description}</Text>
            </View>
            <Button color="#493d8a" title="SKIP" onPress={()=> navigation.navigate("LoginPage")} />
        </View>
    )
}

export default onboardingItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        flex:0.97,
        justifyContent:"center",
        marginTop:200,
        width:"150%",
        height:"50%"
    },
    title:{
        fontWeight:'800',
        fontSize:32,
        marginBottom:18,
        color:'#493d8a',
        textAlign:'center'
    },
    description:{
        fontWeight:'300',
        color:'#62656b',
        textAlign:'center',
        paddingHorizontal:64
    }
})
