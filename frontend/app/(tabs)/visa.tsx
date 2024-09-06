import React from "react";
import { ScrollView } from "react-native";

// importing componts
import VisaMain from "@/components/visa/visaMain";

export default function Home() {
  return (
    <ScrollView className="m-0">
      <VisaMain />
    </ScrollView>
  );
}
