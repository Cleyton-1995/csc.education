import React, { useEffect } from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { router, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import tokenCache from "./storage/tokenCache";

const clerkPublishableKey = process.env
  .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export function InitialRouter() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.replace("(auth)");
    } else {
      router.replace("(public)");
    }
  }, [isSignedIn]);

  return isLoaded ? (
    <Slot />
  ) : (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  );
}

export default function Layout() {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey} tokenCache={tokenCache}>
      <InitialRouter />
    </ClerkProvider>
  );
}
