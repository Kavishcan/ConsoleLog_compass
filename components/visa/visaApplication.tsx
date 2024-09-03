import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UploadItem = ({ title }: { title: any }) => (
  <View className="flex-row justify-between items-center border border-dashed border-gray-600 p-4 mb-4 rounded-lg">
    <View className="flex-1">
      <Text className="text-yellow-500 font-semibold">{title}</Text>
    </View>
    <View className="flex-1 flex-row justify-center">
      <Pressable className="bg-yellow-500 py-2 px-4 rounded-full flex-row items-center">
        <Text className="text-black font-semibold mr-1">Upload</Text>
        <Ionicons name="cloud-upload-outline" size={16} color="black" />
      </Pressable>
    </View>
    <View className="flex-1 flex-row justify-end">
      <Pressable className="bg-gray-700 py-2 px-4 rounded-full flex-row items-center">
        <Text className="text-white font-semibold mr-1">More info</Text>
        <Ionicons name="information-circle-outline" size={16} color="white" />
      </Pressable>
    </View>
  </View>
);

const PaymentMethod = ({ image, isSelected, onSelect }) => (
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

export default function VisaApplication() {
  const [selectedPayment, setSelectedPayment] = useState("visa");
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <View className="bg-transparent flex-1 p-4">
      <UploadItem title="Valid passport copies" />
      <UploadItem title="Payment details for visa fees Visa" />
      <UploadItem title="Passport size photographs" />
      <UploadItem title="Supporting documents" />

      <Text className="text-white my-4">Payment Method</Text>
      <View className="flex-row mb-6">
        <PaymentMethod
          image={require("./../../assets/images/react-logo.png")}
          isSelected={selectedPayment === "paypal"}
          onSelect={() => setSelectedPayment("paypal")}
        />
        <PaymentMethod
          image={require("./../../assets/images/react-logo.png")}
          isSelected={selectedPayment === "visa"}
          onSelect={() => setSelectedPayment("visa")}
        />
        <PaymentMethod
          image={require("./../../assets/images/react-logo.png")}
          isSelected={selectedPayment === "mastercard"}
          onSelect={() => setSelectedPayment("mastercard")}
        />
        <PaymentMethod
          image={require("./../../assets/images/react-logo.png")}
          isSelected={selectedPayment === "diners"}
          onSelect={() => setSelectedPayment("diners")}
        />
        <PaymentMethod
          image={require("./../../assets/images/react-logo.png")}
          isSelected={selectedPayment === "amex"}
          onSelect={() => setSelectedPayment("amex")}
        />
      </View>

      <Pressable
        className="flex-row items-center mb-6"
        onPress={() => setAgreeTerms(!agreeTerms)}
      >
        <View
          className={`w-5 h-5 border border-gray-500 rounded mr-2 ${
            agreeTerms ? "bg-green-500" : "bg-transparent"
          }`}
        >
          {agreeTerms && <Ionicons name="checkmark" size={16} color="white" />}
        </View>
        <Text className="text-white">I agree to the terms and conditions.</Text>
      </Pressable>

      <Pressable className="bg-teal-600 py-4 rounded-lg">
        <Text className="text-white text-center font-semibold text-lg">
          Submit Application
        </Text>
      </Pressable>
    </View>
  );
}
