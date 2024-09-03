import React from "react";
import { View } from "react-native";

// importing componts
import Hero from "@/components/home/hero";
import Events from "@/components/home/events";
import Destinations from "@/components/home/destinations";
import Offers from "@/components/home/offers";

export default function Home() {
  return (
    <View className="bg-black">
      <Hero />
      <Destinations />
      <Events />
      <Offers />
    </View>
  );
}
