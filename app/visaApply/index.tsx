import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install expo vector icons
import VisaForm from "@/components/visa/visaForm";
import VisaApplication from "@/components/visa/visaApplication";
import ProcessingStatus from "@/components/visa/processingStatus";
import PaymentMethod from "@/components/visa/paymentMethod";

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

export default function VisaApply() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  return (
    <ScrollView className="bg-[#0C0F16] flex-1 mt-12">
      <Text className="text-white px-4 text-lg font-thin my-6">
        Lets Start Applying
      </Text>

      <View className="flex-row justify-between items-center bg-white px-4 py-2 mb-2">
        <View className="flex-1 ">
          <Text className="text-[#0C0F16] text-lg font-bold">
            Select Your Visa Type
          </Text>
          <Text className="text-gray-400 text-xs mt-2">
            Choose the appropriate visa type based on your travel purpose:
          </Text>
        </View>
        <Pressable
          onPress={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: "#E0E0E0", // Grey background color
            borderRadius: 50, // Rounded background
            padding: 8, // Padding around the icon
          }}
        >
          <Ionicons
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={24}
            color="#0C0F16"
          />
        </Pressable>
      </View>

      {/* Separate section for the expandable content */}
      {isOpen && <PaymentMethod />}

      <View className="flex-row justify-between items-center bg-white px-4 py-2 mb-2">
        <View className="flex-1 ">
          <Text className="text-[#0C0F16] text-lg font-bold">
            Submit Documents
          </Text>
          <Text className="text-gray-400 text-xs mt-2">
            You'll need to submit the following to proceed
          </Text>
        </View>
        <Pressable
          onPress={() => setIsSecondOpen(!isSecondOpen)}
          style={{
            backgroundColor: "#E0E0E0", // Grey background color
            borderRadius: 50, // Rounded background
            padding: 8, // Padding around the icon
          }}
        >
          <Ionicons
            name={isSecondOpen ? "chevron-up" : "chevron-down"}
            size={24}
            color="#0C0F16"
          />
        </Pressable>
      </View>
      {/* Separate section for the expandable content */}
      {isSecondOpen && (
        <>
          <VisaApplication />
        </>
      )}
      <ProcessingStatus />
    </ScrollView>
  );
}
