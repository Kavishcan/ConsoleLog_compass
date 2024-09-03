import { View, Text, Image } from "react-native";
import React from "react";

export default function Hero() {
  return (
    <View>
      <View>
        <View>
          <Image source={require("../../assets/images/home/avatar.png")} />
          <Text>Hi, Bella</Text>
        </View>
        <View>
            <Image source={require("../../assets/images/home/notification.png")} />
        </View>
      </View>
    </View>
  );
}
