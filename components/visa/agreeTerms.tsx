import { View, Text } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AgreeTerms() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  return (
    <Pressable
      className="flex-row items-center mb-2 mx-4"
      onPress={() => setAgreeTerms(!agreeTerms)}
    >
      <View
        className={`w-5 h-5 border border-gray-500 rounded mr-2 ${
          agreeTerms ? "bg-green-500" : "bg-transparent"
        }`}
      >
        {agreeTerms && <Ionicons name="checkmark" size={16} color="white" />}
      </View>
      <Text className="text-white">I agree to the terms and conditions.</Text>
    </Pressable>
  );
}
