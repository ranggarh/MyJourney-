import { CommonActions } from "@react-navigation/native"; // Import CommonActions for navigation
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Submit } from "../../components";
import { Box, Center, Input, Pressable, Text,  } from "native-base";
// import { MainTabs } from "../MainBottomTab";
// import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./LoginScreen";


const RegisterScreen = ({ navigation }) => {
  return (
    
    <Box>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      
       <Box p={4} mt={10}>
        <Text bold fontSize={30}  >Welcome To My Journey </Text>
        <Text fontSize={20} >Register your account to continue</Text>
       </Box>
       <Box alignSelf={"center"} mb={10}>
       <Ionicons name="person-add-outline" size={100} color="grey"  ></Ionicons>
       </Box>

      

      <Box>
        <Input
          placeholder="Nama"
          icon="user"
          style={{ height: 50 }}
        //   value={nama}
        //   onChangeText={setName}
          mb={5}
          mr={5}
          ml={5}
        />
        <Input
          placeholder="Email"
          icon="user"
          style={{ height: 50 }}
        //   value={email}
        //   onChangeText={setEmail}
          mb={5}
          mr={5}
          ml={5}
        />
        <Input
          secureTextEntry
          mr={5}
          ml={5}
          style={{ height: 50 }}
        //   value={password}
          placeholder="Password"
        //   onChangeText={setPassword}
        />
        <Box w="72" alignSelf={"center"} mt={10} >
        <Submit
          title="Register Account"
          color="#28AA9B"
          clicked={LoginScreen}
        />
        {/* Display error message */}
        {/* {error && <Text style={styles.errorText}>{error}</Text>} */}
        {/* Rest
         of the code remains the same */}
        </Box>
      </Box>

      
    </Box>
  );
};

export default RegisterScreen;