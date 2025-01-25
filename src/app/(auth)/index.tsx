import React from 'react';
import { Text, View } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Olá, usuário!</Text>
    </View>
  );
}

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});