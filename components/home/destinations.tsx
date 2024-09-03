import React from "react";
import { styled } from "nativewind";
import { View, Text, Image } from "react-native";


const StyledView = styled(View);
const StyledText = styled(Text);

export default function Destinations() {
  return (
    <StyledView className="bg-blue-500">
      {/* title */}
      <StyledView>
        <StyledText>Top Destinations</StyledText>
        <StyledView>
            <StyledText>View All</StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
