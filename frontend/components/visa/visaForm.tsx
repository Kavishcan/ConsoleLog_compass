import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FormInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  isDropdown = false,
}) => (
  <View className="mb-5">
    <Text className="text-white mb-3">{label}</Text>
    <Pressable
      className="bg-black rounded-xl p-3 flex-row justify-between items-center border border-gray-700 "
      disabled={!isDropdown}
    >
      <TextInput
        className="text-white flex-1 "
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#666"
      />
      {isDropdown && <Ionicons name="chevron-down" size={24} color="#666" />}
    </Pressable>
  </View>
);

export default function VisaForm() {
  const [fullName, setFullName] = useState("John Henry");
  const [nationality, setNationality] = useState("British");
  const [passportNumber, setPassportNumber] = useState("BHF434654D");
  const [arrivalDate, setArrivalDate] = useState("12");
  const [arrivalMonth, setArrivalMonth] = useState("January");
  const [flightNumber, setFlightNumber] = useState("QR 4584");
  const [email, setEmail] = useState("john@yahoo.com");
  const [purposeOfVisit, setPurposeOfVisit] = useState("");
  const [fromDate, setFromDate] = useState("12/01/2024");
  const [toDate, setToDate] = useState("12/02/2024");

  return (
    <ScrollView className="bg-transparent flex-1 p-4">
      <FormInput
        label="Full Name"
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter full name"
      />
      <FormInput
        label="Nationality"
        value={nationality}
        onChangeText={setNationality}
        placeholder="Select nationality"
        isDropdown
      />
      <FormInput
        label="Passport Number"
        value={passportNumber}
        onChangeText={setPassportNumber}
        placeholder="Enter passport number"
      />

      <View className="flex-row justify-between mb-4">
        <View className="w-[48%]">
          <FormInput
            label="Arrival Date"
            value={arrivalDate}
            onChangeText={setArrivalDate}
            placeholder="Date"
            isDropdown
          />
        </View>
        <View className="w-[48%]">
          <FormInput
            label="Arrival Month"
            value={arrivalMonth}
            onChangeText={setArrivalMonth}
            placeholder="Month"
            isDropdown
          />
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          borderStyle: "dotted",
          marginBottom: 16,
        }}
      />

      <FormInput
        label="Flight Number"
        value={flightNumber}
        onChangeText={setFlightNumber}
        placeholder="Enter flight number"
      />
      <FormInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email address"
      />
      <FormInput
        label="Purpose of Visit"
        value={purposeOfVisit}
        onChangeText={setPurposeOfVisit}
        placeholder="Enter purpose of visit"
      />

      <View className="flex-row justify-between mb-4">
        <View className="w-[48%]">
          <FormInput
            label="From"
            value={fromDate}
            onChangeText={setFromDate}
            placeholder="Select date"
            isDropdown
          />
        </View>
        <View className="w-[48%]">
          <FormInput
            label="To"
            value={toDate}
            onChangeText={setToDate}
            placeholder="Select date"
            isDropdown
          />
        </View>
      </View>
    </ScrollView>
  );
}
