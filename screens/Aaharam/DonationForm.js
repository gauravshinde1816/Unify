import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DonorDetails from "./DonorDetails";
import FoodDetails from "./FoodDetails";
import Submit from "./Submit";
import App from "../../App";

import AaharamHome from "./AaharamHome";

class DonationForm extends React.Component {
  state = {
    step: 1,
    donorName: this.props.donorName,
    email: this.props.email,
    phoneNo: this.props.phoneNo,
    address: this.props.address,
    city: this.props.address,
    itemName: this.props.itemName,
    description: this.props.description,
    category: this.props.category,
    quantity: this.props.quantity,
  };

  //next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  //previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  //go back
  goBack = () => {
    const { step } = this.state;
    this.setState({
      step: 0,
    });
  };
  //Donor Details
  handleDonorDetails = (values) => {
    const { donorName, email, phoneNo, address, city } = this.state;
    this.setState({
      donorName: values.donorName,
      email: values.email,
      phoneNo: values.phoneNo,
      address: values.address,
      city: values.city,
    });
  };
  //food details
  handleFoodDetails = (values) => {
    const { itemName, description, category, quantity } = this.state;
    this.setState({
      itemName: values.itemName,
      description: values.description,
      category: values.category,
      quantity: values.quantity,
    });
  };

  render() {
    const { step } = this.state;
    const {
      donorName,
      email,
      phoneNo,
      address,
      city,
      itemName,
      description,
      category,
      quantity,
    } = this.state;
    const values = {
      donorName,
      email,
      phoneNo,
      address,
      city,
      itemName,
      description,
      category,
      quantity,
    };
    const { navigation } = this.props;

    switch (step) {
      case 0:
        return (
          <View style={styles.container}>
            {navigation.navigate("AaharamHome")}
          </View>
        );
      case 1:
        return (
          <View style={styles.container}>
            <DonorDetails
              nextStep={this.nextStep}
              values={values}
              handleDonorDetails={this.handleDonorDetails}
            />
          </View>
        );
      case 2:
        return (
          <View style={styles.container}>
            <FoodDetails
              nextStep={this.nextStep}
              values={values}
              prevStep={this.prevStep}
              handleFoodDetails={this.handleFoodDetails}
            />
          </View>
        );
      case 3:
        return (
          <View>
            <Submit
              values={values}
              prevStep={this.prevStep}
              goBack={this.goBack}
            />
          </View>
        );
      default:
        return (
          <View>
            <App />
          </View>
        );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    //backgroundColor:'yellow'
  },
});

export default DonationForm;
