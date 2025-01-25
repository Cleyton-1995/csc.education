import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  icon: keyof typeof Ionicons.glyphMap;
  size: number,
  color: string,
  onPress: () => void
}

export function Button({
  icon,
  isLoading = false,
  title,
  color, 
  size,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      activeOpacity={0.8}
      {...rest}
      style={styles.signButton}
    >
      {isLoading ? (
        <ActivityIndicator color="#d2ecfb" />
      ) : (
        <View style={styles.signButtonIndicator}>
          <Ionicons name={icon} size={size} color={color} />
          <Text style={styles.textButton}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  signButton: {
    display: "flex",
    backgroundColor: "#7690f8",
    padding: 10,
    margin: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    borderRadius: 50,
    height: 45,
  },
  signButtonIndicator: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  textButton: {
    color: "#043484",
    fontWeight: "bold",
  },
});
