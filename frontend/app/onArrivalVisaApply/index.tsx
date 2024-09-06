import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install expo vector icons
import VisaForm from "@/components/visa/visaForm";
import VisaApplication from "@/components/visa/visaApplication";
import PaymentMethod from "@/components/visa/paymentMethod";
import AgreeTerms from "@/components/visa/agreeTerms";
import { useNavigation } from "@react-navigation/native";

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
  const [isOpen, setIsOpen] = useState(true);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const navigation = useNavigation();

  const handlePressOnArrivalVisa = () => {
    navigation.navigate("onArrivalVisaFinal/index");
  };

  return (
    <ScrollView className="bg-[#1E1E1E] flex-1 pt-12 ">
      <Text className="text-white px-4 text-lg font-thin my-6">
        On Arrival Visa
      </Text>

      <View className="flex-row justify-between items-center bg-white px-4 py-2 mb-2">
        <View className="flex-1 ">
          <Text className="text-[#0C0F16] text-lg font-bold">
            How it works?
          </Text>
          <Text className="text-gray-400 text-xs mt-2">
            Forget the paperwork! Now, you can fill out a simple form online and
            generate a QR code that serves as your on-arrival visa.
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
      {isOpen && (
        <View className="mt-2 bg-transparent">
          <StepItem number="1" title="Complete the Form:" />
          <StepItem number="2" title="Generate Your QR Code:" />
          <StepItem number="3" title="Use the QR Code:" />
        </View>
      )}

      <View className="flex-row justify-between items-center bg-white px-4 py-2 mb-2">
        <View className="flex-1 ">
          <Text className="text-[#0C0F16] text-lg font-bold">
            On Arrival Visa Application
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
          <VisaForm />
          <VisaApplication />
          <Text className="text-white mx-4 mt-2 mb-4">Payment Method</Text>
          <PaymentMethod />
          <AgreeTerms />
          <View className="pb-12">
            <Pressable
              className="bg-teal-600 py-4 rounded-lg m-4"
              onPress={handlePressOnArrivalVisa}
            >
              <Text className="text-white text-center font-semibold text-lg">
                Submit Application
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </ScrollView>
  );
}
