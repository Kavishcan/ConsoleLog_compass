import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="visa"
        options={{
          title: "Visa",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="briefcase" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="clock-o" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="travel"
        options={{
          title: "Travel",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plane" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
