import React, { useState, useEffect } from "react";
import { styled } from "nativewind";
import { View, Text, Image } from "react-native";

// Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";

// Importing sub components
import Offer from "./subComponents/offer";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Offers() {
    const offers = [
        {
          title: "Nuwara Eliya Offer",
          description: "2 nights at the luxurious Manor...",
          image: "../../assets/images/home/NuwaraEliya.png",
          price: 120
        },
        {
          title: "Nuwara Eliya Offer",
          description: "2 nights at the luxurious Manor...",
          image: "../../assets/images/home/NuwaraEliya.png",
          price: 120
        },
        {
          title: "Nuwara Eliya Offer",
          description: "2 nights at the luxurious Manor...",
          image: "../../assets/images/home/NuwaraEliya.png",
          price: 120
        },
        {
          title: "Nuwara Eliya Offer",
          description: "2 nights at the luxurious Manor...",
          image: "../../assets/images/home/NuwaraEliya.png",
          price: 120
        },

      ];

  return (
    <StyledView className="w-[80%] m-auto">
      {/* title */}
      <StyledView className="w-full flex flex-row items-center justify-between mb-2">
        <StyledText className="text-white" style={{ fontSize: 24, }}>Offers</StyledText>
        <StyledView className="flex flex-row items-center gap-2">
          <StyledText className="text-white">View All</StyledText>
          <AntDesign name="arrowright" size={20} color="#FFBE29" />
        </StyledView>
      </StyledView>

      {/* offers */}
      <ScrollView>
        {offers.map((offer, index) => (
          <Offer key={index} offer={offer} />
        ))}
      </ScrollView>
    </StyledView>
  );
}