import React, {useState, useLayoutEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button, ScrollView } from 'react-native';
import {AntDesign, FontAwesome, Ionicons} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Profile from '../screens/Profile';
import Map from '../screens/Map';
import Home from '../screens/Home'

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
    return (
            <Tab.Navigator barStyle={{backgroundColor:"black"}}
                screenOptions={({ route }) => ({
                    title: false,
                    tabBarIcon: ({ color, size }) => {
                    const icons = {
                        Home: 'home',
                        Profile: 'user',
                        Map: 'map-marker',
                    };
                
                    return (
                        <FontAwesome
                        name={icons[route.name]}
                        color={color}
                        size={30}
                        style={{justifyContent:"space-around"}}
                        />
                    );
                    },
                })}
              >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})
