import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const { Navigator, Screen } = createStackNavigator();

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AfterSignup from "./pages/AfterSignup";
import FirstDream from "./pages/FirstDream";
import ResumeDream from "./pages/FirstDream/ResumeDream";
import Feed from "./pages/Feed";
import Colors from "./utils/Colors";
import DreamScreen from "./pages/DreamScreen";
import NewDream from "./pages/DreamScreen/NewDream";
import Friends from "./pages/Friends";
import Notifications from "./pages/Notifications";
import UserPage from "./pages/UserPage";
import CustomHeader from "./components/Header/CustomHeader";

function myTabs() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: Colors.purple }}
      labeled={false}
      activeColor="#f0edf6"
      inactiveColor="#bba4dd"
    >
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="friends"
        component={Friends}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" color={color} size={24} />
          ),
        
        }}
        
      />
      <Tab.Screen
        name="main-dream"
        component={DreamScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="happy-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={UserPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="main" 
        >
          <Screen name="home" component={Home} />
          <Screen name="login" component={Login} />
          <Screen name="signup" component={Signup} />
          <Screen name="after-signup" component={AfterSignup} />
          <Screen name="first-dream" component={FirstDream} />
          <Screen name="resume-dream" component={ResumeDream} />
          <Screen name="main" component={myTabs} />
          <Screen name="new-dream" component={NewDream}/*  options={{
            headerShown: true,
            header: () => <CustomHeader title='Um novo sonho...' />
          }} *//>
        </Navigator>
      </NavigationContainer>
    </>
  );
}
