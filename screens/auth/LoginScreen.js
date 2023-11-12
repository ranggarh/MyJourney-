import { CommonActions } from "@react-navigation/native"; // Import CommonActions for navigation
import React, { useState } from "react";
import { StatusBar, TouchableOpacity} from "react-native";
import { Input, Button, Text, Heading, Box, } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const LoginScreen = (props) => {
  return (
    <Box mt={20} >
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Box alignItems="center"  mb={5}  >
      <Ionicons name="person-circle-outline" size={150} color="grey" ></Ionicons>
      </Box>

      

      <Box>
        <Input
          ml={5}
          mr={5}
          placeholder="Email Address"
        //   onChangeText={setEmail}
        //   value={email}
          fontSize={18}
          mb={5}
        />
        <Input
        ml={5}
        mr={5}
          fontSize={18}
          mb={5}
          placeholder="Password"
        //   onChangeText={setPassword}
        //   value={password}
          secureTextEntry
        />
        <TouchableOpacity>
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
        </TouchableOpacity>
        <Button
          p={4}
          ml={10}
          mr={10}
          title="Register Account"
          color="#FFFFFF"
          borderRadius={15}
          style={{
            borderColor: "#0F7EF8", // Replace with your desired border color
            borderWidth: 1, // You can adjust the width of the border if needed
            backgroundColor: "#FFFFFF", // Set the background to transparent to keep it unchanged
          }}
          onPress={() => {
            props.navigation.dispatch(CommonActions.navigate("RegisterScreen"));
          }}
        >
          <Heading size="xs" color="#0F7EF8">
            Register Account
          </Heading>
        </Button>
        {/* {error && <Text style={styles.errorText}>{error}</Text>} */}
      </Box>
    </Box>
  );
};


export default LoginScreen;