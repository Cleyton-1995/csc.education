import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

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

        <TouchableOpacity style={styles.signButton} >
          <Ionicons name="logo-google" size={24} color="#FFFFFF" />
          <Text style={styles.textButton} >Sign with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
