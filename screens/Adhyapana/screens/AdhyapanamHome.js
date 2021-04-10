import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FAB, Title, Button } from "react-native-paper";
const { width, height } = Dimensions.get("window");

const main = require("../assets/carousel/img3.jpeg");
const missionImg = require("../assets/goal.png");
const joinTheMovement = require("../assets/carousel/img1.jpg");
const fellowShip = require("../assets/fellowship.jpg");
const donate = require("../assets/icons/heart.png");
const togather = require("../assets/icons/together.png");
const idea = require("../assets/icons/idea.png");

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={main} style={styles.image} resizeMode="cover" />
        </View>
        <View style={{ width: "50%", position: "absolute", left: 18, top: 80 }}>
          <Text style={styles.text}>Are you ready to be the change?</Text>
          <FAB
            style={styles.fab}
            // icon={idea}
            label="Join Us"
            onPress={() => navigation.navigate("Application")}
          />
        </View>
        <View style={styles.mission}>
          <Title
            style={{
              color: "white",
              textTransform: "uppercase",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            {/* <Image source={missionImg} style={{ height: 50, width: 50 }} /> */}
            Our Mission
          </Title>
          <Text
            style={{
              flexDirection: "row",
              justifyContent: "center",
              color: "white",
              marginTop: 10,
            }}
          >
            At Adhyapanam, we believe leadership for education is the solution.
            We are building a movement of leaders who will eliminate educational
            inequity in India.
          </Text>
        </View>
        <View>
          <Image source={joinTheMovement} style={{ height: 250, width: 380 }} />
          <FAB
            style={styles.donate}
            small
            icon={donate}
            label="Donate"
            onPress={() => navigation.navigate("Application")}
          />
        </View>
        <View style={{ backgroundColor: "#0d0d0d", justifyContent: "center" }}>
          <Image
            source={fellowShip}
            resizeMode="cover"
            style={{
              height: 350,
              width: width,
              opacity: 0.4,
            }}
          />
          <View style={{ position: "absolute" }}>
            <Title
              style={{
                color: "white",
                textAlign: "center",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Fellowship
            </Title>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                width,
                fontWeight: "800",
              }}
            >
              To overcome the lack of good teachers, we all should direct our
              efforts towards relieving the plight of children suffering from
              the above mentioned syndromes or with financial constraints.
              Hence, Adhyapanam comes into the picture. Willing Users can
              register, and would have to go through the scrutinizing process
              conducted by NGOs or schools. After scrutinizing these
              applications, they can start teaching.
            </Text>
            <FAB
              style={styles.fellowShip}
              small
              icon={togather}
              label="Join The movement"
              onPress={() => navigation.navigate("Application")}
            >
              <Image source={idea} style={{ height: 30, width: 30 }} />
            </FAB>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 370,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  fab: {
    marginTop: 20,
    backgroundColor: "#cf4404",
  },
  mission: {
    backgroundColor: "black",
    padding: 15,
  },
  join: {
    position: "absolute",
    top: 120,
    right: 20,
    backgroundColor: "#6666ff",
  },
  fellowShip: {
    color: "white",
    marginVertical: 20,
    marginHorizontal: 30,
    backgroundColor: "#cf4404",
  },
  donate: {
    position: "absolute",
    top: 90,
    right: 10,
    backgroundColor: "#cf4404",
  },
});

export default Home;
