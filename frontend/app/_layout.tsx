import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Barlow: require("../assets/fonts/Barlow-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="onArrivalVisaApply/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="visaApply/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="onArrivalVisaFinal/index"
          options={{ headerShown: false }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
