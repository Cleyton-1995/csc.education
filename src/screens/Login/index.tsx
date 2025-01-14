import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';


export function Login() {
  return (
    <View style={styles.container}>
      <Image source={require("../../Assets/Images/login.png")} />
      <Text>ReactNative</Text>
    </View>
  );
}
