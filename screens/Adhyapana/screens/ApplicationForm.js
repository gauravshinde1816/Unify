import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image, Alert } from "react-native";
import { TextInput, FAB } from "react-native-paper";

import axios from "axios";
const mail = require("../assets/icons/gmail.png");
const College = require("../assets/icons/school.png");
const user = require("../assets/icons/user.png");
const campus = require("../assets/icons/campus.png");
const calender = require("../assets/icons/schedule.png");
const conversation = require("../assets/icons/conversation.png");
// const cross = require("../assets/icons/cross.png");
// const correct = require("../assets/icons/correction.png");
const ApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DateOfBirth, setDOB] = useState("");
  const [college, setCollege] = useState("");
  const [university, setUniversity] = useState("");
  const [ans1, setans1] = useState("");
  const [ans2, setans2] = useState("");

  const handleSubmit = async () => {
    console.log("Submit call");
    const application = {
      name,
      email,
      university,
      college,
      DOB: DateOfBirth,
      ans1,
      ans2,
    };
    const res = await axios.post(
      "http://192.168.0.108:5000/adhyapana/forms",
      application
    );
    console.log(res.data);

    // console.log(res.data);
    setCollege("");
    setDOB("");
    setEmail("");
    setName("");
    setUniversity("");
    setans1("");
    setans2("");
    Alert.alert("Your Application has been submitted , for review !!");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 10 }}>
        {/* <Title style={{ textAlign: "center" }}>Application Form</Title> */}
        <View style={styles.details}>
          <Image source={user} style={styles.icon} />
          <Text>Name</Text>
        </View>
        <TextInput
          value={name}
          style={styles.input}
          underlineColor="black"
          theme={{ colors: { primary: "green" } }}
          onChangeText={(name) => setName(name)}
        />
        <View style={styles.details}>
          <Image source={mail} style={styles.icon} />
          <Text> Email </Text>
        </View>
        <TextInput
          value={email}
          style={styles.input}
          underlineColor="black"
          theme={{ colors: { primary: "green" } }}
          onChangeText={(email) => setEmail(email)}
        />
        <View style={styles.details}>
          <Image source={calender} style={styles.icon} />
          <Text> Date of Birth </Text>
        </View>

        <TextInput
          // label="Date of Birth"
          value={DateOfBirth}
          style={styles.input}
          underlineColor="black"
          theme={{ colors: { primary: "green" } }}
          onChangeText={(DOB) => setDOB(DOB)}
        />
        <View style={styles.details}>
          <Image source={College} style={styles.icon} />
          <Text> College </Text>
        </View>
        <TextInput
          // label="college Name"
          value={college}
          underlineColor="black"
          style={styles.input}
          theme={{ colors: { primary: "green" } }}
          onChangeText={(college) => setCollege(college)}
        />
        <View style={styles.details}>
          <Image source={campus} style={styles.icon} />
          <Text> University </Text>
        </View>
        <TextInput
          value={university}
          style={styles.input}
          underlineColor="black"
          theme={{ colors: { primary: "green" } }}
          onChangeText={(university) => setUniversity(university)}
        />
        <View style={styles.details}>
          <Image source={conversation} style={styles.icon} />
          <Text> What is your inspiration behind joining us ?</Text>
        </View>
        <TextInput
          value={ans1}
          underlineColor="black"
          style={styles.inputs}
          theme={{ colors: { primary: "green" } }}
          onChangeText={(ans1) => setans1(ans1)}
        />
        <View style={styles.details}>
          <Image source={conversation} style={styles.icon} />
          <Text> Do you education can create impact on society, how ?</Text>
        </View>

        <TextInput
          value={ans2}
          underlineColor="black"
          style={styles.inputs}
          theme={{ colors: { primary: "green" } }}
          onChangeText={(ans2) => setans2(ans2)}
        />
        <FAB style={styles.fab} label="Submit" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputs: {
    height: 150,
  },
  input: {
    marginVertical: 10,
  },
  fab: {
    margin: 15,
  },
  details: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  icon: {
    height: 20,
    width: 20,
    marginHorizontal: 2,
  },
});
export default ApplicationForm;
