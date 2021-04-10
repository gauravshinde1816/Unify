import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "react-navigation-drawer";

import Aaharam from "./Aaharam/Aaharam";
import Adhyapana from "./Adhyapana/MainNavigator";
import Paryavarana from "./Paryavarana/Paryavarana";
import Anya from "./Anya/Anya";
import First from "./First";

import DrawerNavigation from "../routes/DrawerNavigation";

const Tab = createMaterialTopTabNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          backgroundColor: "black",
          color: "white",
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            paddingLeft: 25,
            fontFamily: "heavitas",
            fontSize: 25,
            marginRight: 15,
            marginTop: 20,
            color: "#cf4404",
          }}
        >
          UNIFY
        </Text>
      </SafeAreaView>

      <Tab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: { width: 120 },
          indicatorStyle: { backgroundColor: "white" },
        }}
        swipeEnabled
      >
        <Tab.Screen name="Home" component={First} />
        <Tab.Screen name="Aaharam" component={Aaharam} />
        <Tab.Screen name="Adhyapana" component={Adhyapana} />
        <Tab.Screen name="Paryavarana" component={Paryavarana} />
        <Tab.Screen name="Anya" component={Anya} />
      </Tab.Navigator>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
