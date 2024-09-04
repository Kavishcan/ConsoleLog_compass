import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";

// Icons
import AntDesign from "@expo/vector-icons/AntDesign";

// Importing sub components
import Offer from "./subComponents/offer";

export default function Offers() {
  const offers = [
    {
      title: "The Bellwood Manor",
      description: "2 nights  at the luxurious Manor...",
      image: require("../../assets/images/home/NuwaraEliya.png"),
      price: 120,
    },
    {
      title: "The Sigiriya",
      description: "2 nights at the luxurious Manor...",
      image: require("../../assets/images/home/sigiriya.png"),
      price: 120,
    },
  ];

  return (
    <View className="pb-12">
      {/* title */}
      <View className="flex flex-row items-center justify-between my-8 mx-2">
        <Text className="text-white text-2xl font-extralight">Offers</Text>
        <View className="flex flex-row items-center gap-2">
          <Text className="text-white">View All</Text>
          <AntDesign name="arrowright" size={20} color="#FFBE29" />
        </View>
      </View>

      {/* offers */}
      <ScrollView>
        {offers.map((offer, index) => (
          <Offer key={index} offer={offer} />
        ))}
      </ScrollView>
    </View>
  );
}
