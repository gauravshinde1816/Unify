import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { TextInput, Button, Appbar } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

import * as yup from "yup";

const ProgramForm = (props) => {
  const [enableShift, setEnableShift] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === "ios");
    if (mode == "date") {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode("time");
      setShow(Platform.OS !== "ios");
    } else {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setShow(Platform.OS === "ios");
      setMode("date");
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `;
  };
  const formatTime = (time) => {
    return `${time.getHours()}:${time.getMinutes()}`;
  };

  const formValidationSchema = yup.object().shape({
    programName: yup.string().min(3).required("Program name is required"),
    programPlace: yup.string().required("Place is required"),
  });
  const handleBack = () => {
    props.prevStep();
  };
  return (
    <KeyboardAvoidingView behavior="position" enabled={enableShift}>
      <View>
        <ImageBackground
          style={styles.backStyle}
          source={{
            uri:
              "https://t4.ftcdn.net/jpg/02/82/21/15/360_F_282211503_qfDsDczVdrYq4RGUKqjDQaHDzj8mxGLd.jpg",
          }}
        >
          <Appbar style={styles.appbarStyle}>
            <Text style={styles.textStyle}>Program Details</Text>
          </Appbar>

          <View style={styles.formStyle}>
            <Formik
              initialValues={{
                programName: props.values.programName,
                programMotto: props.values.programMotto,
                programPlace: props.values.programPlace,
                programDate: props.values.programDate,
                programTime: props.values.programTime,
                programOtherInfo: props.values.programOtherInfo,
              }}
              onSubmit={(values) => {
                values.programDate = formatDate(date);
                values.programTime = formatTime(time);
                console.log(values);
                props.handleProgramDetails(values);
                props.nextStep();
              }}
              validationSchema={formValidationSchema}
            >
              {/* ----------------------------display form components-------------------------------------------- */}
              {(props) => (
                <View>
                  <TextInput
                    mode="outlined"
                    style={styles.inputStyle}
                    theme={theme}
                    label="Program Name*"
                    value={props.values.programName}
                    onChangeText={props.handleChange("programName")}
                  ></TextInput>
                  {/*  ---------------------------------------dislay errors */}
                  <Text style={styles.errorStyle}>
                    {props.touched.programName && props.errors.programName}
                  </Text>
                  <TextInput
                    mode="outlined"
                    style={styles.inputStyle}
                    theme={theme}
                    label="Motto"
                    value={props.values.programMotto}
                    onChangeText={props.handleChange("programMotto")}
                  ></TextInput>

                  <TextInput
                    mode="outlined"
                    style={styles.inputStyle}
                    theme={theme}
                    label="Place*"
                    value={props.values.programPlace}
                    onChangeText={props.handleChange("programPlace")}
                  ></TextInput>
                  <Text style={styles.errorStyle}>
                    {props.touched.programPlace && props.errors.programPlace}
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={showDatepicker}>
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={{
                          uri:
                            "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png",
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        margin: 5,
                        padding: 2,
                        backgroundColor: "#fff",
                        fontSize: 18,
                        borderWidth: 1,
                        borderColor: "#1e9c3f",
                      }}
                    >
                      {formatDate(date)}
                    </Text>
                    <Text
                      style={{
                        margin: 5,
                        padding: 2,
                        backgroundColor: "#fff",
                        fontSize: 18,
                        borderWidth: 1,
                        borderColor: "#1e9c3f",
                      }}
                    >
                      {formatTime(time)}
                    </Text>
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    )}
                  </View>
                  <TextInput
                    mode="outlined"
                    style={styles.inputStyle}
                    theme={theme}
                    onFocus={() => setEnableShift(true)}
                    label="Other Information"
                    value={props.values.programOtherInfo}
                    onChangeText={props.handleChange("programOtherInfo")}
                  ></TextInput>
                  <Button
                    icon="arrow-right"
                    style={styles.buttonStyle}
                    mode="contained"
                    onPress={props.handleSubmit}
                  >
                    Continue
                  </Button>
                </View>
              )}
            </Formik>
          </View>
          <Image
            style={{ alignSelf: "center", height: 250, width: 200 }}
            source={{ uri: "https://www.clearias.com/up/save-nature.png" }}
          />
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backStyle: {
    resizeMode: "cover",
    justifyContent: "center",
  },

  formStyle: {
    // margin: 10,
    //backgroundColor:'#e1f78f',
    padding: 5,
  },
  appbarStyle: {
    backgroundColor: "#1b67f5",
    //position:'relative',

    alignContent: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
  },
  inputStyle: {
    margin: 5,
    padding: 5,
    backgroundColor: "#ffffff",
  },
  dateTimeStyle: {
    margin: 5,
    padding: 5,
    backgroundColor: "#ffffff",
    width: 300,
  },
  buttonStyle: {
    alignSelf: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "#1b67f5",
    borderColor: "#6197fa",
    borderRadius: 40,
    borderWidth: 3,
  },
  errorStyle: {
    color: "red",
    fontWeight: "bold",
    marginLeft: 12,
  },
});
const theme = {
  colors: {
    primary: "#1e9c3f",
  },
};

export default ProgramForm;
