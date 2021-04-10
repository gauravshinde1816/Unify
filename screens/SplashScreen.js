import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'

import SplashscreenCarousel from './SplashscreenCarousel/onboardingItem'

const slides = [
    {title:"ABC", 
    description:"With React Native, you style your application using JavaScript.", 
    id:0, link:'https://picsum.photos/700'},
    {title:"DEF", 
    description:"The method that React Native use for styling use CSS properties and it's actually not the same as normal CSS", 
    id:1, link:'https://picsum.photos/600'},
    {title:"GHI", 
    description:"You may give custom styles and values to these components by passing different values in the props of these components.", 
    id:2, link:'https://picsum.photos/500'},
    {title:"JKL", description:"With React Native, you style your application using JavaScript.",
    id:3, link:'https://picsum.photos/400'},
]


const Splashscreen = ({navigation}) => {


    
    return (
        <SafeAreaView style={styles.container} >
            <FlatList 
                data={slides} 
                renderItem={({item}) => <SplashscreenCarousel item={item} />  } 
                horizontal
                showsHorizontalScrollIndicator={true}
                pagingEnabled
                bounces={false}
            />
            
        </SafeAreaView>
    )
}

export default Splashscreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"white"
    }
})
