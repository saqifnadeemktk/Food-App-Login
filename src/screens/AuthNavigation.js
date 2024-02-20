import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "./WelcomeScreen";
import { LoginScreen } from "./LoginScreen";
 import {SignupScreen} from "./SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home";
// import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="welcomescreen">
      <Stack.Screen name="welcome" component={WelcomeScreen} options={
        {headerShown: false}
      } />
      <Stack.Screen name="login" component={LoginScreen} options={
        {headerShown: false}
      }/>
        <Stack.Screen name="signup" component={SignupScreen} options={
            {headerShown: false}
        }/>
        <Stack.Screen name="home" component={Home} options={
            {headerShown: false}
        }/>
    </Stack.Navigator>
   </NavigationContainer>
  );
};
