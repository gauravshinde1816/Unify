import React from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PHome from "./Screens/PHome";
import PProgramList from "./Screens/PProgramList";

import PForm from "./Screens/PForm";
import MyPrograms from "./Screens/MyPrograms";
import Volunteering from "./Screens/Volunteering";
import MyVolProgramDetails from "./Screens/MyVolProgramDetails";
import AvailableProgDetails from "./Screens/AvailableProgDetails";

const Stack = createStackNavigator();
export default function Paryavarana() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PHome" component={PHome} />
        <Stack.Screen name="PProgramList" component={PProgramList} />
        <Stack.Screen name="Volunteering" component={Volunteering} />
        <Stack.Screen name="MyPrograms" component={MyPrograms} />
        <Stack.Screen
          name="MyVolProgramDetails"
          component={MyVolProgramDetails}
        />
        <Stack.Screen
          name="AvailableProgDetails"
          component={AvailableProgDetails}
        />
        <Stack.Screen name="PForm" component={PForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
