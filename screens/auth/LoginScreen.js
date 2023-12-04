import { CommonActions } from "@react-navigation/native"; // Import CommonActions for navigation
import React, { useState } from "react";
import { ImageBackground, StatusBar,} from "react-native";
import { Input, Button, Text, Heading, Box, Pressable } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const LoginScreen = (props) => {
  return (
    <ImageBackground
    source={require("../../assets/wallpaper-login.jpg")}
    style={{flex:1, resizeMode:"cover"}}
    blurRadius={3}>
    <Box mt={20} >
      
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Box alignItems="center"  mb={5}  >
      <Ionicons name="person-circle-outline" size={150} color="white" ></Ionicons>
      </Box>

      

      <Box>
        <Input
          ml={5}
          mr={5}
          
        //   onChangeText={setEmail}
        //   value={email}
          fontSize={18}
          placeholder="Email Address"
          mb={5}
          color="white"
          borderColor="white" borderWidth={"2"}/>
           
          
        <Input
        ml={5}
        mr={5}
          fontSize={18}          
          borderColor="white"
          placeholder="Password"
          color="white"
          borderWidth={"2"}
        //   onChangeText={setPassword}
        //   value={password}
          secureTextEntry
/>
        <Pressable>
        <Text textAlign={"right"} mr={5} mb={5} color="white"  > Forgot Password   </Text>
        </Pressable>

        <Pressable>
        <Button
        
          p={4}
          ml={10}
          mr={10}
          mb={5}
          title="Login"
          color="#0F7EF8"
          borderRadius={15}
          onPress={() => {
            props.navigation.dispatch(CommonActions.navigate("Tabs"));
          }}
        >
          <Heading size="xs" color="#FFFFFF">
            Login
          </Heading>
        </Button>
        </Pressable>
        <Button
          p={4}
          ml={10}
          mr={10}
          title="Register Account"
          color="#FFFFFF"
          borderRadius={15}
          style={{
            borderColor: "#FFFFFF", 
            borderWidth: 1, 
            backgroundColor: "#FFFFFF", 
          }}
          onPress={() => {
            props.navigation.dispatch(CommonActions.navigate("RegisterScreen"));
          }}
        >
          <Heading size="xs" color="#0383A2">
            Register Account
          </Heading>
        </Button>
      </Box>
    </Box>
    </ImageBackground>
  );
};


export default LoginScreen;