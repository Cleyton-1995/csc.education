import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Login() {
  return (
    <View>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="#043484"
      />
      <Image source={require("../../Assets/Images/login.png")} />

      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bem-vindo ao CSC Eduacation</Text>
        <Text style={styles.signText}>Login/ Signup</Text>

        <TouchableOpacity>Sign with Google</TouchableOpacity>
      </View>
    </View>
  );
}
