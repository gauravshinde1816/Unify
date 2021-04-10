import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ApplicationList from "./ApplicationList";
import ApplicationDetails from "../components/ApplicationDetails";
const ApplicationNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Application List" component={ApplicationList} />
        <Stack.Screen
          name="Application Details"
          component={ApplicationDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
