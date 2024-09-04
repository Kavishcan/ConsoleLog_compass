import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const StepItem = ({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) => (
  <View className="flex-row items-center p-4 mb-4 border border-gray-700 rounded-3xl">
    <Text className="text-[#FFBE29] font-extrabold mr-3 text-5xl">
      {number}
    </Text>
    <View className="flex-1 flex-col justify-start items-start">
      <Text className="text-white font-semibold text-xl">{title}</Text>
      <Text className="text-white font-extralight text-xs">{desc}</Text>
    </View>
    <Ionicons
      name="arrow-forward"
      size={20}
      color="#eab308"
      className="ml-auto"
    />
  </View>
);

export default function Visa() {
  const navigation = useNavigation();

  const handlePressOnArrival = () => {
    navigation.navigate("onArrivalVisaApply/index");
  };

  const handlePressVisa = () => {
    navigation.navigate("visaApply/index");
  };

  return (
    <ScrollView className="bg-[#1E1E1E] flex-1 px-4 pt-12">
      <View className="flex-1 flex-row gap-2 pt-6">
        <Pressable className="mt-12 bg-white inline-block rounded-lg p-2 w-10">
          <Ionicons name="search" size={24} color="black" />
        </Pressable>
        <Pressable className="flex flex-row bg-white rounded-lg w-40 gap-2 font-semibold">
          <Text className="text-black">Premium Services</Text>
          <Ionicons name="star" size={24} color="black" />
        </Pressable>
      </View>

      <Text className="text-white text-lg font-thin my-6">
        Step-by-step guide
      </Text>

      <Pressable onPress={handlePressOnArrival}>
        <View className="rounded-3xl overflow-hidden mb-6 flex flex-col">
          <View className="bg-teal-800 p-4">
            <Text className="text-[#FFBE29] font-semibold mb-1 text-2xl">
              On Arrival Visa
            </Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#eab308"
              style={{ position: "absolute", right: 20, top: 25 }}
            />
            <Text className="text-white text-xs">
              Now you can apply for an on-arrival visa with us. No more hassle
              or long queues – enjoy a seamless process for your travel needs.
            </Text>
          </View>
        </View>
      </Pressable>

      <View className="bg-teal-800 p-6 flex-row justify-between items-center rounded-3xl mb-6">
        <View className="flex flex-col">
          <Text className="text-white font-semibold text-2xl">
            Ready to apply visa?
          </Text>
          <Text className="text-white text-xs">
            Start your visa process here.
          </Text>
        </View>
        <Pressable
          className="bg-white px-4 py-1 rounded-full"
          onPress={handlePressVisa}
        >
          <Text className="text-teal-900 font-semibold">Apply</Text>
        </Pressable>
      </View>

      <View className="pb-12">
        <StepItem
          number="1"
          title="Select Your Visa Type"
          desc="Find the appropriate visa for your travel needs."
        />
        <StepItem
          number="2"
          title="Start Your Application"
          desc="Begin the visa application process effortlessly."
        />
        <StepItem
          number="3"
          title="Schedule an Appointment"
          desc="Choose a Visa Application Centre and book your appointment."
        />
        <StepItem
          number="4"
          title="Make a Payment"
          desc="Discover the visa fees and make your payment."
        />
        <StepItem
          number="5"
          title="Visit the Application Centre"
          desc="Attend your appointment at the chosen Visa Application Centre."
        />
        <StepItem
          number="6"
          title="Monitor Your Application"
          desc="Keep track of your application status in real-time."
        />
        <StepItem
          number="7"
          title="Pick Up Your Passport"
          desc="Collect your passport from the Visa Application Centre."
        />
      </View>
    </ScrollView>
  );
}
