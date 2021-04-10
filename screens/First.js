import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

const cardContent = [
  {
    title: "Aaharam",
    Paragraph:
      "India now ranks 94th among 107 countries in terms of hunger, and continues to be in the 'severe' hunger category according to the Global Hunger Index 2020. With Aaharam, choose the nearest NGO in your locality and participate in their food donation drives. Join our fight against Hunger!",
    id: 0,
    link: require("../assets/aaharam1.jpg"),
  },
  {
    title: "Adhyapana",
    Paragraph:
      "At Adhyapanam, we believe leadership for education is the solution. We are building a movement of leaders who will eliminate educational inequity in India.",
    id: 1,
    link: require("../assets/adhyapana.jpg"),
  },
  {
    title: "Paryavarana",
    Paragraph:
      "Only 9 percent of the total plastic waste in the world is recycled. A Central Pollution Control Board (CPCB) report (2018-19) puts the total annual plastic waste generation in India at a humongous 3.3 million metric tonnes per year. With Paryavarana, interested individuals are displayed a list of nearby events, where they can participate and meet like minded individuals.",
    id: 2,
    link: require("../assets/paryavarana1.jpg"),
  },
];

const First = ({ navigation }) => {
  return (
    <ScrollView ContainerStyle={styles.container}>
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
        "From what we get, we can make a living; what we give, however, makes a
        life"
      </Text>
      <Text style={{ right: -200, marginTop: 5 }}> - Winston Churchill </Text>
      <Text style={styles.information}>
        {"  "}In the year 2020 we witnessed a global pandemic, forest fires,
        earthquakes and what not. The sudden lockdown also brought an
        unprecedented hunger crisis. These crisis showed that we still have to
        become a long way to go. In this day and age the purpose of social media
        networks is to bring the world together but studies show that people
        often feel more desolated, rather than connected. There is a need to
        have a social media network which will connect the people who are
        willing to work for the social cause, interested to contribute for
        sustainable growth of the society. Unify is the social platform where
        people come together for social service cause and make their
        contribution towards sustainable growth of the society.
      </Text>
      {cardContent.map((card) => (
        <Card
          elevation={5}
          style={{ width: 300, marginHorizontal: "8%", marginVertical: 10 }}
        >
          <Card.Cover source={card.link} style={{ height: 300, width: 300 }} />
          <Card.Content>
            <Title>{card.title}</Title>
            <Paragraph>{card.Paragraph}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};
export default First;

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
    marginBottom: 50,
    marginTop: 20,
    textAlign: "justify",
    fontWeight: "300",
  },
});
