import React from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { Button, Appbar, Card } from "react-native-paper";
import { AsyncStorage } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";
const Submit = (props) => {
  const handleBack = () => {
    props.prevStep();
  };
  const submitData = async () => {
    // const date = new Date(props,values.programDate);
    const user = await AsyncStorage.getItem("user");
    console.log(user);
    const res = await axios.post(
      "http://localhost:5000/paryavarana/forms",
      {
        name: props.values.programName,
        motto: props.values.programMotto,
        place: props.values.programPlace,
        date: props.values.programDate,
        time: props.values.programTime,
        otherInfo: props.values.programOtherInfo,
      },
      {
        headers: { Authorization: user },
      }
    );
    console.log(res.data);

    Alert.alert("Details Submitted");
    props.goBack();
  };
  return (
    <View>
      <ImageBackground
        style={styles.backStyle}
        source={{
          uri:
            "https://t4.ftcdn.net/jpg/02/82/21/15/360_F_282211503_qfDsDczVdrYq4RGUKqjDQaHDzj8mxGLd.jpg",
        }}
      >
        <View style={styles.containerStyle}>
          <Card style={styles.cardStyle}>
            <View style={styles.cardViewStyle}>
              <FontAwesome5
                style={styles.iconStyle}
                name="leaf"
                size={25}
                color="#05f26c"
              />
              <Text style={styles.infoStyle}>{props.values.programName}</Text>
            </View>
          </Card>
          <Card style={styles.cardStyle}>
            <View style={styles.cardViewStyle}>
              <Fontisto name="playstation" size={25} color="#05f26c" />
              <Text style={styles.infoStyle}>{props.values.programMotto}</Text>
            </View>
          </Card>
          <Card style={styles.cardStyle}>
            <View style={styles.cardViewStyle}>
              <MaterialIcons name="place" size={25} color="#05f26c" />
              <Text style={styles.infoStyle}>{props.values.programPlace}</Text>
            </View>
          </Card>
          <Card style={styles.cardStyle}>
            <View style={styles.cardViewStyle}>
              <MaterialIcons name="date-range" size={25} color="#05f26c" />
              <Text style={styles.infoStyle}>{props.values.programDate}</Text>
            </View>
          </Card>
          <Card style={styles.cardStyle}>
            <View style={styles.cardViewStyle}>
              <Ionicons name="time" size={25} color="#05f26c" />
              <Text style={styles.infoStyle}>{props.values.programTime}</Text>
            </View>
          </Card>
          <Card style={styles.cardStyle}>
            <View style={styles.cardViewStyle}>
              <Ionicons name="information-circle" size={25} color="#05f26c" />
              <Text style={styles.infoStyle}>
                {props.values.programOtherInfo}
              </Text>
            </View>
          </Card>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button
              icon="update"
              style={styles.buttonStyle}
              mode="contained"
              onPress={handleBack}
            >
              Updtae Details
            </Button>

            <Button
              icon="upload"
              style={styles.buttonStyle}
              mode="contained"
              onPress={submitData}
            >
              Submit
            </Button>
          </View>
        </View>

        <Image
          style={{ alignSelf: "center", height: 300, width: 300 }}
          source={{ uri: "https://www.clearias.com/up/save-nature.png" }}
        />
      </ImageBackground>
    </View>
  );
};
export default Submit;

const styles = StyleSheet.create({
  backStyle: {
    resizeMode: "cover",
    justifyContent: "center",
  },
  appbarStyle: {
    backgroundColor: "#1b67f5",
    //position:'relative',
    // marginTop:50,
    left: 0,
    right: 0,
    top: 50,
    position: "relative",
    alignContent: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
  },
  containerStyle: {
    marginTop: 70,

    padding: 5,
  },
  contentStyle: {
    flexDirection: "row",
    margin: 20,
  },
  iconStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  infoStyle: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 10,
  },
  cardStyle: {
    // flexDirection:'row',
    margin: 5,
  },
  cardViewStyle: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  buttonStyle: {
    alignSelf: "center",
    margin: 15,
    color: "#ffffff",
    backgroundColor: "#1b67f5",
    borderColor: "#6197fa",
    borderRadius: 40,
    borderWidth: 3,
  },
});
