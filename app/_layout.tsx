import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import React from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Barlow": require("../assets/fonts/Barlow-Regular.ttf"),
    "Barlow-Bold": require("../assets/fonts/Barlow-Bold.ttf"),
    "Barlow-Medium": require("../assets/fonts/Barlow-Medium.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
