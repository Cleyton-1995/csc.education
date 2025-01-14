import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    marginTop: -25,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },

  signText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
  },
});
