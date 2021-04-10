import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Title, Button } from "react-native-paper";
const StoryItem = ({ story }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          style={styles.stories}
          source={{
            uri: `https://source.unsplash.com/random/${story.id}`,
          }}
        />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{
                height: 200,
                width: 300,
                borderRadius: 2,
              }}
              source={{
                uri: `https://source.unsplash.com/random/${story.id}`,
              }}
            />
            <Title style={{ marginVertical: 20, textAlign: "center" }}>
              {story.location}
            </Title>
            <Text style={{ padding: 10, fontWeight: "bold" }}>
              {story.desc}
            </Text>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ color: "#131313" }}>Close</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  stories: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: "#cc00ff",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    height: 650,
    width: 300,

    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    bottom: 2,
    elevation: 2,
    marginVertical: 25,
    marginHorizontal: 30,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },

  modalText: {
    margin: 25,
    bottom: 2,
    textAlign: "center",
  },
});

export default StoryItem;
