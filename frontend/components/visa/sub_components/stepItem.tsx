import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const StepItem = ({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) => (
  <View className="flex-row items-center p-4 mb-4 border border-gray-700 rounded-3xl">
    <Text className="text-[#FFBE29] font-extrabold mr-3 text-5xl">
      {number}
    </Text>
    <View className="flex-1 flex-col justify-start items-start">
      <Text className="text-white font-semibold text-xl">{title}</Text>
      <Text className="text-white font-extralight text-xs">{desc}</Text>
    </View>
    <Ionicons
      name="arrow-forward"
      size={20}
      color="#eab308"
      className="ml-auto"
    />
  </View>
);

export default StepItem;
