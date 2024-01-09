import React from "react";
import { ImageBackground } from "react-native";
import { Box, Text, Pressable } from "native-base";

const LandingPage2 = ({ navigation }) => {
  return (
    <Box flex={1}>
      <ImageBackground
        source={require("../assets/alatbackground.jpg")}
        style={{ flex: 1, resizeMode: "cover" }}
      />
      <Box position="absolute" bottom={0} left={0} mb={32} width="100%" p={4}>
        <Box alignItems={"flex-start"}>
          <Text color="white" fontSize="3xl" fontWeight="bold" >
          Explore Further
          </Text>
          <Text color="white" fontSize="2xl" fontWeight="bold">
           Gear is Ready to Take You There!
          </Text>
          <Text color={"white"} mb={10} > 
          "Setting off on a grand odyssey, we embarked on a lengthy adventure, where time seemed to stretch as we explored distant lands, encountered unforeseen challenges, and forged enduring memories along the way."
          </Text>
        </Box>

        <Pressable onPress={() => navigation.navigate("LoginScreen")} alignItems={"center"}>
          {({ isPressed }) => (
            <Box
              bgColor={isPressed ? "gray.200" : "white"}
              justifyContent="center"
              alignItems="center"
              borderRadius={8}
              p={4}
              mt={4}
              mb={"-24"}
              w={"72"}
            >
              <Text textAlign="center" color={isPressed ? "black" : "blue.500"}>
                Get Started
              </Text>
            </Box>
          )}
        </Pressable>
      </Box>
    </Box>
  );
};

export default LandingPage2;
