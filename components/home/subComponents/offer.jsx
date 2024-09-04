import React from "react";
import { styled } from "nativewind";
import { View, Text, Image } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Offer({ offer }) {
  return (
    <StyledView className="mb-4">
      <Image source={{ uri: offer.image }} style={{ width: '100%', height: 200 }} />
      <StyledText className="text-white font-bold">{offer.title}</StyledText>
      <StyledText className="text-gray-400">{offer.description}</StyledText>
      <StyledText className="text-green-500 font-bold">From {offer.price} USD</StyledText>
    </StyledView>
  );
}