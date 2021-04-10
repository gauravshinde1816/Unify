import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getApplications } from "../actions/application_actions";
import ApplicationComponent from "../components/ApplicationComponent";
import { View, Text } from "react-native";
const ApplicationList = (props) => {
  useEffect(() => {
    props.getApplications();
  }, []);
  return (
    <View>
      {props.applications &&
        props.applications.map((item, index) => (
          <ApplicationComponent
            item={item}
            key={index}
            index={index}
            navigation={props.navigation}
          />
        ))}
    </View>
  );
};

const mapStateToProps = (state) => ({
  applications: state.application.applications,
});

export default connect(mapStateToProps, { getApplications })(ApplicationList);
