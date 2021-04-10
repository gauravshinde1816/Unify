import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "../Aaharam/routes/BottomTab";
import About from "./screens/About";
import Profile from "./screens/Profile";
import LoginPage from "./screens/LoginPage";
import SplashScreen from "./screens/SplashScreen";
import RegisterScreen from "./screens/Registration/RegisterScreen";
import onboardingItem from "./screens/SplashscreenCarousel/onboardingItem";
import RegisterNGO from "./screens/Registration/RegisterNGO";
import RegisterUser from "./screens/Registration/RegisterUser";
import DrawerNavigation from "./routes/DrawerNavigation";

import Aaharam from "./screens/Aaharam/Aaharam";
import Adhyapana from "./screens/Adhyapana/MainNavigator";
import Paryavarana from "./screens/Paryavarana/Paryavarana";
import Anya from "./screens/Anya/Anya";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="MenuScreen"
        >
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="RegisterNGO" component={RegisterNGO} />
          <Stack.Screen name="RegisterUser" component={RegisterUser} />
          <Stack.Screen name="MenuScreen" component={MenuScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />

          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
          <Stack.Screen name="onBoardingItem" component={onboardingItem} />
          <Stack.Screen name="About" component={About} />

          {/*  Pillar Pages */}
          <Stack.Screen name="Aaharam" component={Aaharam} />
          <Stack.Screen name="Adhyapana" component={Adhyapana} />
          <Stack.Screen name="Paryavarana" component={Paryavarana} />
          <Stack.Screen name="Anya" component={Anya} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
