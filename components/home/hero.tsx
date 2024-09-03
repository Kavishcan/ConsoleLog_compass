import React from "react";
import { View, Text, Image } from "react-native";
import { styled, withExpoSnack } from "nativewind";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const StyledView = styled(View);
const StyledText = styled(Text);

const Hero = () => {
  return (
    <StyledView className="mt-10">
      <StyledView className="flex flex-row justify-between p-3 px-5 items-center">
        <StyledView className="flex flex-row gap-3 items-center">
          <Image source={require("../../assets/images/home/avatar.png")} />
          <Text className="text-white text-xl">Hi, Bella</Text>
        </StyledView>
        <StyledView>
          {/* replace with icon where without notification no red dot with notification red dot */}
          {/* <Image source={require("../../assets/images/home/notification.png")} /> */}
          <Ionicons name="notifications-outline" size={30} color="white" />
        </StyledView>
      </StyledView>

      <StyledView className="w-screen flex bg-blue-900 justify-center items-center">
        {/* first row */}
        <StyledView className="flex flex-row gap-4">
          <StyledView className="flex flex-row justify-center items-center bg-[#EB7400] w-[70%] p-2 py-6 rounded-2xl gap-1">
            <Ionicons name="paper-plane-outline" size={50} color="white" />
            <StyledText className="text-white text-xl font-bold">
              Quick Guide
            </StyledText>
          </StyledView>
          <StyledView className="bg-white rounded-2xl w-[40%] flex justify-center items-center">
            <MaterialIcons name="emergency" size={50} color="black" />
          </StyledView>
        </StyledView>

        {/* Second row */}
        <StyledView className="flex flex-row gap-4">
          <StyledView className="bg-white rounded-2xl w-[40%] flex justify-center items-center">
            <MaterialIcons name="emergency" size={50} color="black" />
          </StyledView>
          <StyledView className="flex flex-row justify-center items-center bg-[#EB7400] w-[70%] p-2 py-6 rounded-2xl gap-1">
            <Ionicons name="paper-plane-outline" size={50} color="white" />
            <StyledText className="text-white text-xl font-bold">
              Quick Guide
            </StyledText>
          </StyledView>
        </StyledView>

        {/* Third row */}
        <StyledView className="flex flex-row gap-4">
          <StyledView className="flex flex-row justify-center items-center bg-[#EB7400] w-[70%] p-2 py-6 rounded-2xl gap-1">
            <Ionicons name="paper-plane-outline" size={50} color="white" />
            <StyledText className="text-white text-xl font-bold">
              Quick Guide
            </StyledText>
          </StyledView>
          <StyledView className="bg-white rounded-2xl w-[40%] flex justify-center items-center">
            <MaterialIcons name="emergency" size={50} color="black" />
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default withExpoSnack(Hero);
