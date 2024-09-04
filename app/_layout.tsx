import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import React from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Barlow: require("../assets/fonts/Barlow-Regular.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="onArrivalVisaApply/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="visaApply/index" options={{ headerShown: false }} />
    </Stack>
  );
}
