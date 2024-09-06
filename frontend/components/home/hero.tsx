import React from "react";
import { View, Text, Image } from "react-native";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Hero = () => {
  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between items-center mx-4">
        <View className="flex flex-row gap-3 items-center">
          <Image source={require("../../assets/images/home/avatar.png")} />
          <Text className="text-white text-xl">Hi, Bella</Text>
        </View>
        <View>
          <Ionicons name="notifications-outline" size={30} color="white" />
        </View>
      </View>

      <View className="flex justify-center items-center mb-6 mt-10">
        {/* first row */}
        <View className="flex flex-row gap-4 mb-4">
          <View className="flex flex-row justify-center items-center bg-[#EB7400] w-[60%] py-8 rounded-[40px] ">
            <Ionicons name="paper-plane-outline" size={50} color="white" />
            <Text className="text-white text-xl font-bold">Quick Guide</Text>
          </View>
          <View className="bg-white rounded-[40px] w-[30%] flex justify-center items-center">
            <MaterialIcons name="emergency" size={50} color="black" />
          </View>
        </View>

        {/* Second row */}
        <View className="flex flex-row gap-4 mb-4">
          <View className="bg-white rounded-[40px] w-[30%] flex justify-center items-center">
            <FontAwesome5 name="bed" size={50} color="black" />
          </View>
          <View className="flex flex-row justify-center items-center bg-[#B21C4A] w-[60%] py-8 rounded-[40px]">
            <MaterialIcons name="mode-of-travel" size={50} color="white" />
            <Text className="text-white text-xl font-bold">Visa</Text>
          </View>
        </View>

        {/* Third row */}
        <View className="flex flex-row gap-4">
          <View className="flex flex-row justify-center items-center bg-[#00534E] w-[60%] py-8 rounded-[40px]">
            <MaterialCommunityIcons name="wallet" size={50} color="white" />
            <Text className="text-white text-xl font-bold">Wallet</Text>
          </View>
          <View className="bg-white rounded-[40px] w-[30%] flex justify-center items-center">
            <FontAwesome6 name="plane-up" size={50} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Hero;
