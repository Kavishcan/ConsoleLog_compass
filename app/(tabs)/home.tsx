import React from "react";
import { View, ScrollView } from "react-native";

// importing componts
import Hero from "@/components/home/hero";
import Events from "@/components/home/events";
import Destinations from "@/components/home/destinations";
import Offers from "@/components/home/offers";

export default function Home() {
  return (
    <ScrollView className="bg-[#1E1E1E] flex-1 px-4 pt-12">
      <Hero />
      <Destinations />
      <Events />
      <Offers />
    </ScrollView>
  );
}
