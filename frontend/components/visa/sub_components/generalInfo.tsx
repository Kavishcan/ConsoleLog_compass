import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-4">Form</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        className="border rounded-md p-2 mb-2"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        className="border rounded-md p-2 mb-2"
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        className="bg-blue-500 text-white rounded-md p-2"
      />
    </View>
  );
};

export default Form;
