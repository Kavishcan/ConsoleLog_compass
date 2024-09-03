import React, { useState } from "react";
import { styled } from "nativewind";
import { View, Text, Image } from "react-native";

// Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";

// importing sub components
import Destination from "./subComponents/destination";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Destinations() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: {
    nativeEvent: {
      contentOffset: { x: number };
      layoutMeasurement: { width: number };
    };
  }) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const itemWidth = event.nativeEvent.layoutMeasurement.width;
    const newIndex = Math.round(contentOffset / itemWidth);
    setActiveIndex(newIndex);
  };

  return (
    <StyledView className="w-[90%] m-auto">
      {/* title */}
      <StyledView className="w-full flex flex-row items-center justify-between mb-2">
        <StyledText className="text-white text-xl">Top Destinations</StyledText>
        <StyledView className="flex flex-row items-center gap-2">
          <StyledText className="text-white">View All</StyledText>
          <AntDesign name="arrowright" size={20} color="#FFBE29" />
        </StyledView>
      </StyledView>

      {/* scrollable views */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
      >
        <View className="flex flex-row">
          <Destination
            image="../../assets/images/home/sigiriya.png"
            description="Lion Rock Citadel"
            title="Sigiriya"
          />
          <Destination
            image="../../assets/images/home/kandy.png"
            description="Hill Capital of Heritag"
            title="Kandy"
          />
        </View>
      </ScrollView>
    </StyledView>
  );
}
