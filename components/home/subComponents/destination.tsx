import { styled } from "nativewind";
import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";

const StyledImageBackground = styled(ImageBackground);
const StyledView = styled(View);

interface DestinationProps {
  image: string;
  title: string;
  description: string;
}

const Destination = ({ image, title, description }: DestinationProps) => {
  return (
    // <StyledImageBackground source={{ uri: image }} style={[styles.container]} className='rounded-md'>
      <StyledImageBackground resizeMode="stretch" style={styles.container} source={{ uri: image }} className="w-full h-full" imageStyle={{ borderRadius: 6}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </StyledImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    display: "flex",
    justifyContent: "end",
    alignItems: "start",
  },

  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 1,
    marginLeft: 5,
  },

  description: {
    fontSize: 20,
    color: "#EB7400",
    textAlign: "center",
    marginLeft: 5,
  },
});

export default Destination;
