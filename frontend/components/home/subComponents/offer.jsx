import { View, Text, Image, Dimensions } from "react-native";

const Offer = ({ offer }) => (
  <View key={offer.id} className="relative mb-4">
    <Image
      source={offer.image}
      style={{
        width: Dimensions.get("screen").width * 0.9,
        height: 200,
        borderRadius: 15,
      }}
    />
    <View className="absolute bottom-2 left-2 right-2 bg-transparent bg-opacity-50 rounded-lg p-2">
      <Text className="text-white font-bold text-lg">{offer.title}</Text>
      <Text className="text-base text-[#FFBE29]">{offer.description}</Text>
      <Text className="text-green-500 font-bold">From {offer.price} USD</Text>
    </View>
  </View>
);

export default Offer;
