import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput} from 'react-native-paper'

const Anya = () => {

    const [suggestions, useSuggestions] = useState("");

    return (
        <View style={styles.container} >
            <Text style={{fontWeight:"900", fontSize:44, marginTop:50}}>
                Anya
            </Text>
            <Text style={styles.information}>
                These trying times has had us pinned down with many other crises which can be easily solved by the people coming together.
                If you are willing to step up and be a hero to society, put up your suggestions and we will starting pulling out 
                meet up groups for the like minded individuals in your area.
            </Text>
            <TextInput 
                    style={styles.input} 
                    mode="outlined"
                    multiline
                    value={suggestions}
                    placeholder={"Your Action Plan for a better future goes here"}
                    onChangeText={text => useSuggestions(text)}     
                    theme={{
                        colors: {
                                   placeholder: '#cf4404',text: 'white', 
                                   underlineColor: 'transparent', background: '#363747'
                           }
                           
                     }}

                />
        </View>
    )
}

export default Anya

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems:"center",
        backgroundColor:"white",
        overflow:'scroll',
    },
    information:{
        marginHorizontal:30,
        marginBottom:50,
        marginTop:20,
        textAlign:'justify',
        fontWeight:"300"
    },
    input:{
        width: 300,
        height: 60,
        borderRadius: 6,        
        marginBottom:10,
        paddingLeft:10,
        padding:15,       
    },
})
