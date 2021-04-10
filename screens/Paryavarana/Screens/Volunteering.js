import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Appbar, Button, Card } from "react-native-paper";
import MyVolProgramDetails from "./MyVolProgramDetails";

export default function Volunteering({ navigation }) {
  const prgList = [
    {
      id: 1,
      programName: "Go Green",
      programPlace: "Pune",
      programDate: "12/07/2021",
      programTime: "10.00 AM",
    },
    {
      id: 2,
      programName: "Green Sunday",
      programPlace: "Children Park, Sangli",
      programDate: "25/4/2021",
      programTime: "8.00",
    },
    {
      id: 3,
      programName: "Green Sunday",
      programPlace: "Children Park, Sangli",
      programDate: "25/4/2021",
      programTime: "8.00",
    },
    {
      id: 4,
      programName: "Green Sunday",
      programPlace: "Children Park, Sangli",
      programDate: "25/4/2021",
      programTime: "8.00",
    },
  ];

  const renderList = (item) => {
    return (
      <View style={styles.cardViewStyle}>
        <Card style={styles.cardStyle}>
          <Text style={styles.nameStyle}>{item.programName}</Text>
          <View style={styles.cardSubViewStyle}>
            <Text style={styles.titleStyle}>Place:</Text>
            <Text style={styles.cardTextStyle}>{item.programPlace}</Text>
          </View>
          <View style={styles.cardSubViewStyle}>
            <Text style={styles.titleStyle}>Date:</Text>
            <Text style={styles.cardTextStyle}>{item.programDate}</Text>
            <Text style={styles.titleStyle}>Time:</Text>
            <Text style={styles.cardTextStyle}>{item.programTime}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button
              icon="details"
              style={{
                backgroundColor: "#f55df5",
                margin: 5,
                borderWidth: 2,
                borderRadius: 40,
              }}
              mode="contained"
              onPress={() =>
                navigation.navigate("MyVolProgramDetails", { item })
              }
            >
              Show Details
            </Button>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backStyle}
        source={{
          uri:
            "https://t4.ftcdn.net/jpg/02/82/21/15/360_F_282211503_qfDsDczVdrYq4RGUKqjDQaHDzj8mxGLd.jpg",
        }}
      >
        <FlatList
          data={prgList}
          renderItem={({ item }) => {
            return renderList(item);
          }}
          keyExtractor={(item) => `${item.id}`}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    marginBottom: 50,
  },
  textStyle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
  },
  buttonStyle: {
    alignSelf: "center",
    marginBottom: 5,
    color: "#ffffff",

    height: 35,

    alignItems: "center",
    backgroundColor: "#1b67f5",
    borderColor: "#6197fa",
    borderRadius: 40,
    borderWidth: 3,
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
  },
  cardViewStyle: {
    margin: 3,
  },
  cardStyle: {
    padding: 5,
  },
  nameStyle: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#b80281",
  },
  cardSubViewStyle: {
    flexDirection: "row",
  },
  titleStyle: {
    margin: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  cardTextStyle: {
    margin: 5,
    fontSize: 15,
  },
});
