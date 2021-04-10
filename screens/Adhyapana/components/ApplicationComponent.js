import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card, Button, Title } from "react-native-paper";
const mail = require("../assets/icons/gmail.png");
const college = require("../assets/icons/school.png");
const ApplicationComponent = ({ item, index, navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("ApplicationDetails");
  };
  return (
    <ScrollView style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ApplicationDetails", item)}
      >
        <Card>
          <Card.Content style={styles.content}>
            <View>
              <Image
                source={{
                  uri: `https://source.unsplash.com/random/${index + 1}`,
                }}
                style={styles.image}
              />
              <Title style={{ marginVertical: 20, marginLeft: 10 }}>
                {item.name}
              </Title>
            </View>

            <View style={{ marginTop: 30, marginHorizontal: 10 }}>
              <Text>
                <Image source={mail} style={styles.icon} />
                <Text style={{ paddingHorizontal: 10 }}> {item.email}</Text>
              </Text>
              <Text>
                <Image source={college} style={styles.icon} />
                <Text style={{ marginLeft: 20 }}> {item.college}</Text>
              </Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    height: 70,
    width: 70,
    top: 10,
    borderRadius: 35,
  },
  actions: {
    width: "100%",
  },
  icon: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
});
export default ApplicationComponent;
