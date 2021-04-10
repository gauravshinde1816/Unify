import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Button, Appbar, FAB } from "react-native-paper";
import { SliderBox } from "react-native-image-slider-box";
import { LinearGradient } from "expo-linear-gradient";

import PForm from "./PForm";
import PProgramList from "./PProgramList";
import MyPrograms from "./MyPrograms";

export default function PHome({ navigation }) {
  // #d2fcc2

  const images = [
    "https://images.unsplash.com/photo-1610093703375-6d8fd641294b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fHBsYXN0aWMlMjBwb2xsdXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://www.conserve-energy-future.com/wp-content/uploads/2014/12/photo-cropped-view-volunteers-recycling-box.jpg",
    "https://image.vietnamnews.vn/uploadvnnews/Article/2020/8/13/105574_3665466361107045_a1.jpg",
  ];

  return (
    <ScrollView style={styles.container}>
      {/* <ImageBackground
        style={styles.backStyle}
        source={{
          uri:
            "https://t4.ftcdn.net/jpg/02/82/21/15/360_F_282211503_qfDsDczVdrYq4RGUKqjDQaHDzj8mxGLd.jpg",
        }}
      > */}

      <LinearGradient
        // Button Linear Gradient
        colors={["#ffffff", "#ffffff", "#575959"]}
        style={styles.button}
      >
        <View
          style={{
            justifyContent: "center",
            alignSelf: "stretch",
          }}
        >
          {/* <SliderBox
            images={images}
            sliderBoxHeight={570}
            dotColor="#f536b8"
            inactiveDotColor="#90A4AE"
            autoplay
            autoplayInterval={7000}
            circleLoop
          /> */}
          <Image
            style={{ height: 400, width: 390 }}
            source={{
              uri:
                "https://www.conserve-energy-future.com/wp-content/uploads/2014/12/photo-cropped-view-volunteers-recycling-box.jpg",
            }}
          />
        </View>

        <View style={styles.contentStyle}>
          <FAB
            label="Volunteering"
            small
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate(PProgramList);
            }}
          />
          <FAB
            label="My Programs"
            small
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate(MyPrograms);
            }}
          />
        </View>
        <FAB
          label="Organize A Program"
          small
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate(PForm);
          }}
        />
      </LinearGradient>
    </ScrollView>
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
    // top: 50,
    position: "relative",
    alignContent: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
  },
  contentStyle: {
    justifyContent: "space-evenly",
    alignContent: "center",
    paddingLeft: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,

    flexDirection: "row",

    //backgroundColor:'#fff'
  },
  buttonStyle: {
    alignSelf: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "black",
    height: 60,

    alignItems: "center",
    // borderColor: "#cf4404",
    // borderRadius: 40,
    // borderWidth: 3,
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
  },
  imageStyle: {
    height: 300,
    width: 200,
  },
});
