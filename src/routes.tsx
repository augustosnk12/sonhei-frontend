import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="home" component={Home} />
        <Screen name="login" component={Login} /> 
      </Navigator>
    </NavigationContainer>
  );
}
