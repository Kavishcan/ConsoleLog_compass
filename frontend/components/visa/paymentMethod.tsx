import {
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const VisaType = ({
  image,
  isSelected,
  onSelect,
}: {
  image: string;
  isSelected: boolean;
  onSelect: any;
}) => (
  <Pressable
    className={`p-2 rounded-lg ${
      isSelected ? "bg-gray-700" : "bg-transparent"
    }`}
    onPress={onSelect}
  >
    <Image source={{ uri: image }} className="w-16 h-16" resizeMode="contain" />
    {isSelected && (
      <View className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
        <Ionicons name="checkmark" size={12} color="white" />
      </View>
    )}
  </Pressable>
);

export default function VisaTypes() {
  const [selectedVisaType, setSelectedVisaType] = useState<string | null>(null);
  const [visaTypes, setVisaTypes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<any[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchVisaTypes = async () => {
      try {
        const response = await axios.get(
          `https://example.com//api/visa/categories`
        );
        setVisaTypes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching visa types:", error);
        setLoading(false);
      }
    };

    fetchVisaTypes();
  }, []);

  useEffect(() => {
    if (selectedVisaType) {
      const fetchCategories = async () => {
        setCategoriesLoading(true);
        try {
          const response = await axios.get(
            `https://example.com//api/visa/categories?type=${selectedVisaType}`
          );
          setCategories(response.data);
          setCategoriesLoading(false);
        } catch (error) {
          console.error("Error fetching categories:", error);
          setCategoriesLoading(false);
        }
      };

      fetchCategories();
    }
  }, [selectedVisaType]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-row my-6 mx-auto justify-center items-center space-x-4">
        {visaTypes.map((type) => (
          <VisaType
            key={type.id}
            image={type.image}
            isSelected={selectedVisaType === type.id}
            onSelect={() => setSelectedVisaType(type.id)}
          />
        ))}
      </View>
      {categoriesLoading ? (
        <ActivityIndicator className="" size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="p-4 bg-gray-200 rounded-lg my-2">
              <Text className="text-lg font-bold">{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
