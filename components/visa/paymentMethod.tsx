import { View, Text } from "react-native";
import React, { useState } from "react";
import { Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Payment = ({
  image,
  isSelected,
  onSelect,
}: {
  image: any;
  isSelected: boolean;
  onSelect: any;
}) => (
  <Pressable
    className={`mr-4 p-2 rounded-lg ${
      isSelected ? "bg-gray-700" : "bg-transparent"
    }`}
    onPress={onSelect}
  >
    <Image source={image} className="w-12 h-8" resizeMode="contain" />
    {isSelected && (
      <View className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
        <Ionicons name="checkmark" size={12} color="white" />
      </View>
    )}
  </Pressable>
);

export default function PaymentMethod() {
  const [selectedPayment, setSelectedPayment] = useState("visa");
  return (
    <>
      <View className="flex-row my-6">
        <Payment
          image={require("./../../assets/images/react-logo.png")}
          isSelected={selectedPayment === "paypal"}
          onSelect={() => setSelectedPayment("paypal")}
        />
        <Payment
          image={require("./../../assets/images/react-logo.png")}
          isSelected={selectedPayment === "visa"}
          onSelect={() => setSelectedPayment("visa")}
        />
        <Payment
          image={require("./../../assets/images/react-logo.png")}
          isSelected={selectedPayment === "mastercard"}
          onSelect={() => setSelectedPayment("mastercard")}
        />
        <Payment
          image={require("./../../assets/images/react-logo.png")}
          isSelected={selectedPayment === "diners"}
          onSelect={() => setSelectedPayment("diners")}
        />
        <Payment
          image={require("./../../assets/images/react-logo.png")}
          isSelected={selectedPayment === "amex"}
          onSelect={() => setSelectedPayment("amex")}
        />
      </View>
    </>
  );
}
