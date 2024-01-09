import React, { useState } from "react";
import { Box, Heading, Input, Button, Alert, Modal, ModalBackdrop, AlertText, Text, ScrollView,Image, Row } from "native-base";
import { loginUser } from "../../src/actions/AuthAction";

import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const handleLogin = () => {
    if (email && password) {
      loginUser(email, password, navigation)
        .then((user) => {
          if (user.status === 'admin') {
            navigation.replace("AdminTabs"); // Replace with your admin route
          } else {
            navigation.replace("Tabs"); // Replace with your user route
          }
        })
        .catch((error) => {
          console.log("Error", error.message);
          toggleAlert(error.message);
        });
    }
  };
  

  return (
   
    <ScrollView backgroundColor="#0383A2">
    <Box p={"32"} mb={1} backgroundColor={"white"}>
      <Box alignItems={"center"} flexDirection={"row"} ml={"-20"}>
       <Image source={require("../../assets/logo2.png")}   
       w={"32"}
       h={"32"}
       alt="Logo2" 
       />  
       <Text fontSize={"3xl"} fontWeight={"medium"} color={"#8EC648"}>MyJourney</Text>
       </Box>  
    </Box>
    <Box p={10} mt={-10} height="full" borderTopRadius={45} backgroundColor="#0383A2">
      <Box>
        <Text fontSize={22} color={"white"} textAlign={"center"} fontWeight={"bold"} mb={10}>Welcome To MyJourney</Text>
      </Box>
      <Text fontSize={16} mb={2} color={"white"}>
        Email
      </Text>
      <Input
        label="Login"
        width="full"
        height={10}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Masukkan Email Anda"
        placeholderTextColor="white"
        fontSize={18}
        borderColor="white"
        borderWidth={"2"}
        color="white"
      />
      <Text fontSize={16} mt={2} mb={2} color={"white"}>
       Password
      </Text>
      <Input
       label="Password"
       width="full"
       height={10}
       secureTextEntry
       onChangeText={(text) => setPassword(text)}
       value={password}
       placeholder="Masukkan Password Anda"
       placeholderTextColor="white"
       fontSize={18}
       borderColor="white"
       borderWidth={"2"}
       color="white"
      />
       <Button my={3} backgroundColor={"white"} borderRadius={5} onPress={handleLogin} >
       <Text color="#0383A2" fontWeight="bold">
               Login
              </Text>
          </Button>
          <Box flexDirection="column">
            <Text fontSize="sm" color="white">
              Don't have an account?
            </Text>
            <Button
              my={2}
              borderRadius={5}
              backgroundColor="white"
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Text color="#0383A2" fontWeight="bold">
                Register
              </Text>
            </Button>
         </Box>   
    </Box>

    {showAlert && (
          <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
            <ModalBackdrop />
            <Alert status="error" w="90%" mx={4}>
              <AlertText fontWeight="bold">Error!</AlertText>
              <AlertText>{alertMessage}</AlertText>
            </Alert>
          </Modal>
        )}
  </ScrollView>
  );
};

export default LoginScreen;
