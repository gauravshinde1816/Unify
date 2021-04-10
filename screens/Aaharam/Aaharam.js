import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AaharamHome from './AaharamHome';
import AaharamForm from './DonationForm';

const Aaharam = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false }} initialRouteName="Aaharam Home">
            <Stack.Screen name="Aaharam Home" component={AaharamHome} />
            <Stack.Screen name="Aaharam Form" component={AaharamForm} />
        </Stack.Navigator>       
    )
}

export default Aaharam

const styles = StyleSheet.create({})
