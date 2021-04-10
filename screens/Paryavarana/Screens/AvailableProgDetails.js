import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Button, Appbar, Card } from "react-native-paper";
import {
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";
export default function AvailableProgDetails({ route, navigation }) {
  const {
    id,
    organizerName,
    organizerEmail,
    organizerPhone,
    organizerCity,
    organizerAddress,
    programName,
    programDate,
    programTime,
    programPlace,
    programMotto,
    programOtherInfo,
  } = route.params.item;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.backStyle}
        source={{
          uri:
            "https://t4.ftcdn.net/jpg/02/82/21/15/360_F_282211503_qfDsDczVdrYq4RGUKqjDQaHDzj8mxGLd.jpg",
        }}
      >
        <ScrollView>
          <View style={styles.containerStyle}>
            <Text
              style={{
                color: "#030a8f",
                fontSize: 35,
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              {programName}
            </Text>

            <Card style={styles.cardStyle}>
              <View style={styles.cardViewStyle}>
                <Fontisto name="playstation" size={25} color="#fc7e0f" />
                <Text style={styles.infoStyle}>Tree Plantation</Text>
              </View>
            </Card>
            <Card style={styles.cardStyle}>
              <View style={styles.cardViewStyle}>
                <MaterialIcons name="place" size={25} color="#fc7e0f" />
                <Text style={styles.infoStyle}>{programPlace}</Text>
              </View>
            </Card>
            <Card style={styles.cardStyle}>
              <View style={styles.cardViewStyle}>
                <MaterialIcons name="date-range" size={25} color="#fc7e0f" />
                <Text style={styles.infoStyle}>{programDate}</Text>
              </View>
            </Card>
            <Card style={styles.cardStyle}>
              <View style={styles.cardViewStyle}>
                <Ionicons name="time" size={25} color="#fc7e0f" />
                <Text style={styles.infoStyle}>{programTime}</Text>
              </View>
            </Card>
            <Card style={styles.cardStyle}>
              <View style={styles.cardViewStyle}>
                <Ionicons name="information-circle" size={25} color="#fc7e0f" />
                <Text style={styles.infoStyle}>
                  Tree Plantation program oraganized by Rakshya NGO{" "}
                </Text>
              </View>
            </Card>
          </View>
          <Button
            icon="plus"
            style={{
              backgroundColor: "#fc7e0f",
              margin: 5,
              borderWidth: 2,
              borderRadius: 40,
            }}
            mode="contained"
            onPress={() => Alert.alert("You have been added as volunteer")}
          >
            Add me as volunteer
          </Button>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backStyle: {
    flex: 1,
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
    //backgroundColor:"#ffffff",
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
    margin: 10,
    color: "#ffffff",
    backgroundColor: "#1b67f5",
    borderColor: "#6197fa",
    borderRadius: 40,
    borderWidth: 3,
  },
});
