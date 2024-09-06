import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";

// Importing Icons in the expo icon
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    // Create the navigation bar
    <Tabs
      screenOptions={({ route }) => ({
        // Bottom bar design
        tabBarStyle: {
          backgroundColor: "#1c1c1e",
          borderTopWidth: 0,
          height: 60,
        },
        tabBarActiveTintColor: "#fbbf24",
        tabBarInactiveTintColor: "#6b7280",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },

        // Bottom bar icons
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
