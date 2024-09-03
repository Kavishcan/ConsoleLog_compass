import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#1c1c1e", // Dark background
          borderTopWidth: 0,
          height: 60,
        },
        tabBarActiveTintColor: "#fbbf24", // Yellow color for active tab
        tabBarInactiveTintColor: "#6b7280", // Gray color for inactive tabs
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "visa") {
            iconName = "plane";
          } else if (route.name === "services") {
            iconName = "briefcase";
          } else if (route.name === "booking") {
            iconName = "clock-o";
          } else if (route.name === "travel") {
            iconName = "user";
          }

          return (
            <View
              style={{
                borderTopColor: focused ? "#fbbf24" : "transparent",
                borderTopWidth: focused ? 2 : 0,
                paddingTop: 10,
              }}
            >
              <FontAwesome name={iconName} size={24} color={color} />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="visa"
        options={{
          title: "Visa",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="travel"
        options={{
          title: "Travel",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
