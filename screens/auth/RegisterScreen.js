import React, { useState } from "react";
import { Box, Text, Input, Button, Alert, Modal, ModalBackdrop, Heading, Select, ScrollView } from "native-base";
import { ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { registerUser } from "../../src/actions/AuthAction";
import { Header } from "../../components";

const RegisterScreen = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const onRegister = async () => {
    try {
      // Check if all required fields are filled
      if (nama && email && nohp && password) {
        // Prepare user data for registration
        const userData = {
          nama: nama,
          email: email,
          nohp: nohp,
          saldo: 0,
        };

        // Call registerUser function and wait for the result
        const user = await registerUser(userData, password);

        // If registration is successful, navigate to the login screen
        navigation.replace("LoginScreen");
      } else {
        // If any required field is missing, throw an error
        throw new Error("Data tidak lengkap");
      }
    } catch (error) {
      // Catch and handle errors that may occur during registration
      console.error("Error during registration:", error.message);
      toggleAlert(error.message);
    }
  };

  return (
    <Box flex={1}>
      <Header title={"Register"} withBack="true" />
      
      <ImageBackground
        source={require("../../assets/wallpaper-login.jpg")}
        style={{ flex: 1, resizeMode: "cover" }}
        blurRadius={3}
      >
      <ScrollView>
        <Box borderRadius={8} marginTop={10} marginX={6}>
          <Box alignItems="center" mb={5}>
            <Ionicons name="person-circle-outline" size={130} color="white"></Ionicons>
          </Box>

          <Heading textAlign="center" fontSize="3xl" color="white" mb={3}>
            Register
          </Heading>

          <Input
            my={2}
            label="Nama"
            value={nama}
            onChangeText={(nama) => setNama(nama)}
            placeholder="Masukkan Nama Lengkap "
            borderColor="white"
            borderWidth={"2"}
            placeholderTextColor="white"
            fontSize={18}
            color="white"
          />

          <Input
            my={2}
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            placeholder="Email"
            borderColor="white"
            borderWidth={"2"}
            placeholderTextColor="white"
            fontSize={18}
            color="white"
          />

          <Input
            my={2}
            label="No. Handphone"
            keyboardType="phone-pad"
            value={nohp}
            onChangeText={(nohp) => setNohp(nohp)}
            placeholder="Masukkan No. Handphone"
            borderColor="white"
            borderWidth={"2"}
            placeholderTextColor="white"
            fontSize={18}
            color="white"
          />

          <Input
            my={2}
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password)}
            placeholder="Password"
            borderColor="white"
            borderWidth={"2"}
            placeholderTextColor="white"
            fontSize={18}
            color="white"
          />

          {/* Dropdown for selecting role */}


          <Button
            my={5}
            onPress={onRegister}
            backgroundColor="white"
            variant="outline"
            borderRadius="2xl"
          >
            <Text color="#0383A2" fontWeight="bold">
              Register
            </Text>
          </Button>
        </Box>

        {/* show Alert */}
        {showAlert && (
          <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
            <ModalBackdrop />
            <Alert status="error" w="90%" mx={4}>
              <Alert.Text fontWeight="bold">Error!</Alert.Text>
              <Alert.Text>{alertMessage}</Alert.Text>
            </Alert>
          </Modal>
        )}
        </ScrollView>
      </ImageBackground>
      
    </Box>
  );
};

export default RegisterScreen;
