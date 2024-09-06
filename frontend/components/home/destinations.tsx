import React, { useState } from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Destination from "./subComponents/destination"; // Adjust the import path as necessary

const destinations = [
  {
    id: "1",
    image: require("../../assets/images/home/sigiriya.png"),
    description: "Lion Rock Citadel",
    title: "Sigiriya",
  },
  {
    id: "2",
    image: require("../../assets/images/home/kandy.png"),
    description: "Hill Capital of Heritage",
    title: "Kandy",
  },
];

const Destinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const itemWidth = event.nativeEvent.layoutMeasurement.width;
    const newIndex = Math.round(contentOffset / itemWidth);
    setActiveIndex(newIndex);
  };

  const renderItem = ({ item }) => (
    <View key={item.id} className="relative mr-4">
      <Image
        source={item.image}
        style={{
          width: Dimensions.get("screen").width * 0.9,
          height: 180,
          borderRadius: 15,
        }}
      />
      <View className="absolute bottom-2 left-2 right-2 bg-transparent bg-opacity-50 rounded-lg p-2">
        <Text className="text-white font-bold text-lg">{item.title}</Text>
        <Text className="text-base text-[#FFBE29]">{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View>
      {/* title */}
      <View className="flex flex-row items-center justify-between my-4 mx-2">
        <Text className="text-white text-2xl font-extralight">
          Top Destinations
        </Text>
        <View className="flex flex-row items-center gap-2">
          <Text className="text-white">View All</Text>
          <AntDesign name="arrowright" size={20} color="#FFBE29" />
        </View>
      </View>

      {/* scrollable views */}
      <View className="mt-4">
        <FlatList
          data={destinations}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={handleScroll}
          contentContainerStyle={{ flexDirection: "row" }}
        />
      </View>
    </View>
  );
};

export default Destinations;
