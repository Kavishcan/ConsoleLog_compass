import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProcessingStatus = () => {
  return (
    <View className="bg-transparent p-4">
      <View className="mb-4 flex-row items-center">
        <Ionicons name="reload-circle-outline" size={24} color="white" />
        <Text className="text-white text-lg ml-2">Verifying Documents</Text>
      </View>

      <View className="mb-4 flex-row items-center">
        <Ionicons name="reload-circle-outline" size={24} color="white" />
        <Text className="text-white text-lg ml-2">
          Processing Visa Application
        </Text>
      </View>

      <View className="mb-8 flex-row items-center">
        <Ionicons name="reload-circle-outline" size={24} color="white" />
        <Text className="text-white text-lg ml-2">Generating PDF's</Text>
      </View>

      <Pressable
        className="bg-orange-500 rounded-3xl py-4 px-6 flex-row items-center"
        activeOpacity={0.8}
      >
        <View className="flex-1">
          <Text className="text-white text-xs font-bold">
            Download Application
          </Text>
          <Text className="text-white text-xs font-light">
            After Verification
          </Text>
        </View>
        <View className="flex-1 flex-row justify-end">
          <Pressable
            className="bg-orange-400 rounded-full py-2 px-4"
            activeOpacity={0.8}
          >
            <Text className="text-white font-bold">Download PDF</Text>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

export default ProcessingStatus;
