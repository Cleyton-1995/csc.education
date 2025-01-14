import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";

export function Login() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="#043484"
      />
      <Image source={require("../../Assets/Images/login.png")} />
      <Text>ReactNative</Text>
    </View>
  );
}
