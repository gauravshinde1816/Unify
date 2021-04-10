import React from "react";
import { View, Text } from "react-native";

import PHome from "./PHome";

//import Paryavarana from './Paryavarana'
import Submit from "./Submit";

import ProgramForm from "./ProgramForm";

class PForm extends React.Component {
  state = {
    step: 1,

    programName: this.props.programName,
    programMotto: this.props.programMotto,
    programPlace: this.props.programPlace,
    programDate: this.props.programDate,
    programTime: this.props.programTime,
    programOtherInfo: this.props.programOtherInfo,
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

  handleProgramDetails = (values) => {
    const {
      programName,
      programMotto,
      programPlace,
      programTime,
      programDate,
      programOtherInfo,
    } = this.state;
    this.setState({
      programName: values.programName,
      programMotto: values.programMotto,
      programPlace: values.programPlace,
      programTime: values.programTime,
      programDate: values.programDate,
      programOtherInfo: values.programOtherInfo,
    });
  };

  render() {
    const { navigation } = this.props;
    const { step } = this.state;
    const {
      programName,
      programMotto,
      programPlace,
      programTime,
      programDate,
      programOtherInfo,
    } = this.state;
    const values = {
      programName,
      programMotto,
      programPlace,
      programTime,
      programDate,
      programOtherInfo,
    };

    switch (step) {
      case 0:
        return <View>{navigation.navigate(PHome)}</View>;
      case 1:
        return (
          <View>
            <ProgramForm
              nextStep={this.nextStep}
              values={values}
              prevStep={this.prevStep}
              handleProgramDetails={this.handleProgramDetails}
            />
          </View>
        );
      case 2:
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
        return <View>{navigation.navigate(PHome)}</View>;
    }
  }
}

export default PForm;
