import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UploadItem = ({ title }: { title: any }) => (
  <View className="flex-row justify-between items-center border border-dashed border-gray-600 p-4 mb-4 rounded-lg">
    <View className="flex-1">
      <Text className="text-yellow-500 font-semibold">{title}</Text>
    </View>
    <View className="flex-1 flex-row justify-center">
      <Pressable className="bg-yellow-500 py-2 px-4 rounded-full flex-row items-center">
        <Text className="text-black font-semibold mr-1">Upload</Text>
        <Ionicons name="cloud-upload-outline" size={16} color="black" />
      </Pressable>
    </View>
    <View className="flex-1 flex-row justify-end">
      <Pressable className="bg-gray-700 py-2 px-4 rounded-full flex-row items-center">
        <Text className="text-white font-semibold mr-1">More info</Text>
        <Ionicons name="information-circle-outline" size={16} color="white" />
      </Pressable>
    </View>
  </View>
);

export default function VisaApplication() {
  return (
    <View className="bg-transparent flex-1 p-4">
      <UploadItem title="Valid passport copies" />
      <UploadItem title="Payment details for visa fees Visa" />
      <UploadItem title="Passport size photographs" />
      <UploadItem title="Supporting documents" />
    </View>
  );
}
