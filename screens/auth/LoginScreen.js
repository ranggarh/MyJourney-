import React, { useState } from "react";
import { Box, Heading, Input, Button, Alert, Modal, ModalBackdrop, AlertText, Text } from "native-base";
import { loginUser } from "../../src/actions/AuthAction";
import { ImageBackground } from "react-native";
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
    <Box flex={1} backgroundColor="#3498db" justifyContent="center">
      <ImageBackground
        source={require("../../assets/wallpaper-login.jpg")}
        style={{ flex: 1, resizeMode: "cover" }}
        blurRadius={3}
      >
        <Box borderRadius={8} marginTop={10} marginX={6}>
          <Box alignItems="center" mt={20} mb={2}>
            <Ionicons name="person-circle-outline" size={130} color="white" />
          </Box>
          <Heading textAlign="center" fontSize="3xl" color="white" mb={4}>
            Login
          </Heading>
          <Input
            mt={1}
            mb={2}
            label="Login"
            width="full"
            height={10}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email/Username"
            placeholderTextColor="white"
            fontSize={18}
            borderColor="white"
            borderWidth={"2"}
            color="white"
          />
          <Input
            mb={2}
            my={2}
            label="Password"
            width="full"
            height={10}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
            placeholderTextColor="white"
            fontSize={18}
            borderColor="white"
            borderWidth={"2"}
            color="white"
          />
          <Button my={3} colorScheme="teal" borderRadius={5} onPress={handleLogin}>
            Login
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
      </ImageBackground>
    </Box>
  );
};

export default LoginScreen;
