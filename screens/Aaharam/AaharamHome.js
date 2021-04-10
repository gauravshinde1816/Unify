import React, { useWindowDimensions } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

const cardContent = [
  {
    title: "Yuva",
    Paragraph:
      "Yuva rural schools have been started in villages to provide high-quality school education to underprivileged rural children who cannot otherwise access or afford it. Few kids like Birai can't afford a meal, join us to help them out!",
    id: 0,
    link: require("../../assets/1.jpeg"),
  },
  {
    title: "Sahayta",
    Paragraph:
      "Our Organization aims to feed homeless people and organizes frequent drives. We are loacted in Pune and Mumbai. Join us to be part of the greater good.",
    id: 1,
    link: require("../../assets/2.jpeg"),
  },
  {
    title: "Kadam",
    Paragraph:
      " 'There are people in the world so hungry, that God cannot appear to them except in the form of bread.' - Mahatma Gandhi. Take one step towards the betterment of society. Join us on our weekly drives in Delhi and Noida to be a part!",
    id: 2,
    link: require("../../assets/3.jpeg"),
  },
  {
    title: "Nivant",
    Paragraph:
      "To have a 'Nivant' life, a man should not sleep worrying about tomorrow's meal. We are set in Dharavi, Mumbai and aim to eliminate hunger. We are looking for food in surplus amounts, please register if you are a wedding event manager ... etc",
    id: 3,
    link: require("../../assets/4.jpeg"),
  },
];
const AaharamHome = ({ navigation }) => {
  return (
    <ScrollView ContainerStyle={[styles.container]}>
      <Text
        style={{
          fontStyle: "italic",
          fontWeight: "400",
          fontSize: 25,
          marginHorizontal: 25,
          marginTop: 25,
        }}
      >
        {" "}
        "You can't build a peaceful world on empty stomachs and human misery"
      </Text>
      <Text style={{ right: -150, marginVertical: 10 }}>
        {" "}
        - Dr. Norman Ernest Borlaug{" "}
      </Text>
      <Text style={styles.information}>
        {"  "} Food security, as defined by the United Nations' Committee on
        World Food Security, means that all people, at all times, have physical,
        social, and economic access to sufficient, safe, and nutritious food
        that meets their food preferences and dietary needs for an active and
        healthy life.
      </Text>
      <Text style={styles.information}>
        {"  "} Hunger has remained a consistent problem. For those who get to
        have more than a morsel sometimes end up throwing it. Food waste
        management is crucial since it can improve our environmental and
        economic sustainability.
      </Text>
      <Text style={styles.information}>
        {"  "}
        India now ranks 94th among 107 countries in terms of hunger, and
        continues to be in the 'severe' hunger category according to the Global
        Hunger Index 2020. According to the study, 14% of India's population is
        undernourished. Last year, India's GHI rank was 102 out of 117
        countries.
      </Text>
      <Text style={styles.information}>
        {"  "} Considering this imbalance, many NGOs and independent donors use
        the excessive food from restaurants to feed the impoverished. With
        Aaharam, choose the nearest NGO in your locality and participate in
        their food donation drives. Join our fight against Hunger!
      </Text>

      {cardContent.map((card) => (
        <Card
          elevation={5}
          style={{ width: 300, margin: 15, marginHorizontal: 30 }}
        >
          <Card.Cover source={card.link} />
          <Card.Content>
            <Title>{card.title}</Title>
            <Paragraph>{card.Paragraph}</Paragraph>
          </Card.Content>
          <Card.Actions style={{ flexDirection: "row-reverse" }}>
            <Button
              title="Register"
              color="black"
              onPress={() => {
                navigation.navigate("Aaharam Form");
              }}
            />
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

export default AaharamHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "scroll",
  },
  information: {
    marginHorizontal: 30,
    marginVertical: 5,

    textAlign: "justify",
    fontWeight: "300",
  },
});
