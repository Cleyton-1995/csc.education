import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screens/Login";
import { StatusBar, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <View style={{
        paddingTop: getStatusBarHeight(),
      }} >
        <StatusBar
          barStyle={"light-content"}
          translucent
          backgroundColor="#043484"
        />
      </View>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
