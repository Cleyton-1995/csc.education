import React, { useEffect, useState } from "react";
import { Image, StatusBar, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useOAuth } from "@clerk/clerk-expo";
import { Button } from "@/components/Button";

import * as Linking from "expo-linking";
import { router } from "expo-router";
import tokenCache from "../storage/tokenCache";

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const googleOAuth = useOAuth({ strategy: "oauth_google" });

  async function onGoogleSign() {
    try {
      setIsLoading(true);

      const redirectUrl = Linking.createURL("(auth)");

      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({
            session: oAuthFlow.createdSessionId,
          });

          if (oAuthFlow.createdSessionId) {
            await tokenCache.saveToken("authToken", oAuthFlow.createdSessionId);
          }
  
        }
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <View>
      <StatusBar
        barStyle={"dark-content"}
        translucent
        backgroundColor="#d2ecfb"
      />
      <Image style={{height: 300, width: "100%" }} source={require("../../Assets/Images/signIn.jpg")} />

      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bem-vindo ao CSC Eduacation</Text>
        <Text style={styles.signText}>Login/ Signup</Text>

        <Button
          icon="logo-google"
          color="#043484"
          size={24}
          title="Entrar com Google"
          isLoading={isLoading}
          onPress={onGoogleSign}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    marginTop: -25,
    backgroundColor: "#d2ecfb",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
  },

  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: "#043484",
  },

  signText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
    color: "#043484",
  },
});
