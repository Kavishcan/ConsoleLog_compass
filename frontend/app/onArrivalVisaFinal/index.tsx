import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install expo vector icons

const StepItem = ({ number, title }: { number: string; title: string }) => (
  <Pressable className="flex-row items-center p-4 mx-2 mb-4 border border-gray-700 rounded-3xl">
    <Text className="text-[#FFBE29] font-extrabold mr-3 text-5xl">
      {number}
    </Text>
    <Text className="text-white font-semibold text-xl flex-1">{title}</Text>
    <View style={{ width: 20 }}>
      <Ionicons name="arrow-forward" size={20} color="#eab308" />
    </View>
  </Pressable>
);

export default function onArrivalVisaApply() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  return (
    <ScrollView className="bg-[#1E1E1E] flex-1 pt-12 px-4">
      <View className="flex flex-row justify-between">
        <Text className="text-white px-4 text-lg font-thin my-6">
          On Arrival Visa
        </Text>
        <Ionicons name="arrow-backward" size={24} color="#FFBE29" />
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
      <View>
        <Text>Scan the QR code</Text>
        {/* <QRCode
          value="https://example.com"
          size={200}
          bgColor="#000000"
          fgColor="#FFFFFF"
        /> */}
        <Button
          title="Send Email"
          onPress={() => {
            // Handle email sending
          }}
        />
      </View>
    </ScrollView>
  );
}
