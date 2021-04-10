import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { FAB } from "react-native-paper";
import { connect } from "react-redux";
import { deleteApplication } from "../actions/application_actions";
const { width } = Dimensions.get("window");
const mail = require("../assets/icons/gmail.png");
const college = require("../assets/icons/school.png");
const user = require("../assets/icons/user.png");
const campus = require("../assets/icons/campus.png");
const calender = require("../assets/icons/schedule.png");
const conversation = require("../assets/icons/conversation.png");
const cross = require("../assets/icons/cross.png");
const correct = require("../assets/icons/correction.png");
const ApplicationDetails = ({ route, navigation, deleteApplication }) => {
  const item = route.params;
  const handleActions = (params) => {
    deleteApplication(item._id);

    Alert.alert(`Your Application has been ${params}`);
    navigation.navigate("ApplicationList");
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 0 }}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            }}
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <View style={styles.details}>
            <Image source={user} style={styles.icon} />
            <Text>{item.name}</Text>
          </View>
          <View style={styles.details}>
            <Image source={mail} style={styles.icon} />
            <Text>{item.email}</Text>
          </View>
          <View style={styles.details}>
            <Image source={college} style={styles.icon} />
            <Text>{item.college}</Text>
          </View>
          <View style={styles.details}>
            <Image source={campus} style={styles.icon} />
            <Text>{item.university}</Text>
          </View>
          <View style={styles.details}>
            <Image source={calender} style={styles.icon} />
            <Text>{item.DOB}</Text>
          </View>
          <View style={styles.details}>
            <Image source={conversation} style={styles.icon} />
            <Text>
              I feel my skills are particularly well-suited to this position
              because … ” “I believe I have the type of knowledge to succeed in
              this role and at the company because … ... “I'm excited about this
              job opportunity
            </Text>
          </View>
          <View style={styles.details}>
            <Image source={conversation} style={styles.icon} />
            <Text>
              I feel my skills are particularly well-suited to this position
              because … ” “I believe I have the type of knowledge to succeed in
              this role and at the company because … ... “I'm excited about this
              job opportunity
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 20,
            }}
          >
            <FAB
              label="Accept"
              onPress={() => handleActions("Accepted")}
              icon={correct}
              style={styles.accept}
            />
            <FAB
              label="Reject"
              onPress={() => handleActions("Rejected")}
              icon={cross}
              style={styles.reject}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroud: {
    backgroundColor: "#0073e6",
    height: "35%",
    marginLeft: -20,
    marginRight: -30,
    marginTop: 0,
    marginBottom: -10,
    transform: [{ rotate: "6deg" }],
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  details: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 15,
  },
  label: {
    fontWeight: "800",
  },
  icon: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  accept: {
    backgroundColor: "green",
  },
  reject: {
    backgroundColor: "red",
  },
});
export default connect(null, { deleteApplication })(ApplicationDetails);
