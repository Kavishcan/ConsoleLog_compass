import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install expo vector icons

const StepItem = ({ number, title }) => (
  <View className="flex-row items-center p-6 border border-gray-700 rounded-3xl">
    <Text className="text-yellow-400 font-bold mr-3">{number}</Text>
    <Text className="text-white flex-1">{title}</Text>
    <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
  </View>
);

export default function Visa() {
  return (
    <ScrollView className="bg-black flex-1 px-4 mt-12">
      <View className="flex-row justify-between mt-4 mb-6">
        <TouchableOpacity className="bg-gray-800 px-3 py-2 rounded-full flex-row items-center">
          <Ionicons name="star" size={16} color="white" />
          <Text className="text-white text-xs ml-1">Premium services</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-yellow-500 px-3 py-2 rounded-full flex-row items-center">
          <Ionicons name="document-text" size={16} color="black" />
          <Text className="text-black text-xs ml-1">Apply for a visa</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-800 px-3 py-2 rounded-full flex-row items-center">
          <Ionicons name="calendar" size={16} color="white" />
          <Text className="text-white text-xs ml-1">Book an appointment</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-gray-800 px-4 py-2 rounded-full mb-6 self-start flex-row items-center">
        <Text className="text-white mr-2">Track Visa Application</Text>
        <Ionicons name="time-outline" size={16} color="white" />
      </TouchableOpacity>

      <Text className="text-white text-lg font-thin my-6">
        Step-by-step guide
      </Text>

      <View className="rounded-3xl overflow-hidden mb-6 flex flex-col">
        <View className="bg-teal-800 p-4">
          <Text className="text-yellow-500 font-semibold mb-1 text-2xl">
            On Arrival Visa
          </Text>
          <Ionicons
            name="arrow-forward"
            size={20}
            color="#eab308"
            style={{ position: "absolute", right: 20, top: 25 }}
          />
          <Text className="text-white text-xs">
            Now you can apply for an on-arrival visa with us. No more hassle or
            long queues – enjoy a seamless process for your travel needs.
          </Text>
        </View>
      </View>

      <View className="bg-teal-800 p-6 flex-row justify-between items-center rounded-3xl">
        <View className="flex flex-col">
          <Text className="text-white font-semibold text-2xl">
            Ready to apply visa?
          </Text>
          <Text className="text-white text-xs">
            Start your visa process here.
          </Text>
        </View>
        <Pressable className="bg-white px-4 py-1 rounded-full">
          <Text className="text-teal-900 font-semibold">Apply</Text>
        </Pressable>
      </View>

      <View className="p-4">
        <StepItem number="1" title="Select Your Visa Type" />
        <StepItem number="2" title="Start Your Application" />
        <StepItem number="3" title="Schedule an Appointment" />
        <StepItem number="4" title="Make a Payment" />
        <StepItem number="5" title="Visit the Application Centre" />
        <StepItem number="6" title="Monitor Your Application" />
        <StepItem number="7" title="Pick Up Your Passport" />
      </View>
    </ScrollView>
  );
}