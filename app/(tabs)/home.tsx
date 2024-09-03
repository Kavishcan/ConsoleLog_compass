import React from "react";
import { View } from "react-native";

// importing componts
import Hero from "@/components/home/hero";
import Events from "@/components/home/events";
import Destinations from "@/components/home/destinations";
import Offers from "@/components/home/offers";
import { styled } from "nativewind";
import { ScrollView } from "react-native-gesture-handler";

const StyledView = styled(View);

export default function Home() {
  return (
    <ScrollView className="bg-black text-white">
      <Hero />
      <Destinations />
      <Events />
      <Offers />
    </ScrollView>
  );
}
