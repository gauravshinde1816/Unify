import React, { useLayoutEffect, useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function SplashScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loadFonts = async () => {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Heavitas: require("../assets/fonts/heavitas/Heavitas.ttf"),
      Brush_Script_MT: {
        uri: require("../assets/fonts/brush-script-mt/brush script mt kursiv.ttf"),
      },
    });
    // this.setState({ fontsLoaded: true });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  // const [loaded] = useFonts({
  //   Heavitas: require("../assets/fonts/heavitas/Heavitas.ttf"),
  // });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerStyle: {
        height: -10,
      },
      title: " ",
    });
  });

  const pressHandler = async () => {
    const User = { email, password };
    const res = await axios.post("http://192.168.0.108:5000/users/login", User);
    // console.log(res.data.token);
    await AsyncStorage.setItem("user", res.data.token);
    navigation.replace("MenuScreen");
  };

  const RegisterFunc = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView style={styles.containerView}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.HeadingSplash}>UNIFY</Text>
        <Text style={styles.subHeading}>
          Volunteering for a better tomorrow
        </Text>
      </View>

      <TextInput
        style={styles.input}
        value={email}
        placeholder={"Email address or Username"}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={[styles.input, { marginBottom: 50 }]}
        value={password}
        placeholder={"Password"}
        secureTextEntry={true}
        onSubmitEditing={pressHandler}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        title="Login"
        style={styles.LoginButton}
        color="#93d3f5"
        onPress={pressHandler}
      />

      <TouchableOpacity style={styles.registerButton} onPress={RegisterFunc}>
        <Text style={styles.RegisterText}>New here? Sign Up!</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
  },
  HeadingSplash: {
    fontSize: 55,
    fontFamily: "Roboto",
    marginTop: 150,
  },
  subHeading: {
    fontSize: 20,
    fontFamily: "Brush_Script_MT",
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 6,
    backgroundColor: "#f5f5f5",
    marginBottom: 10,
    paddingLeft: 10,
    position: "relative",
  },
  registerButton: {
    width: 250,
    height: 250,
    alignItems: "center",
    flex: 1,
    position: "relative",
    margin: 100,
  },
  RegisterText: {
    color: "#8d8f94",
  },
});
