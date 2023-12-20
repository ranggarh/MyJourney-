import React, { useState } from "react";
import { Box, Text, Input, Button, Alert, Modal, ModalBackdrop, Heading, Select } from "native-base";
import { ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { registerUser } from "../../src/actions/AuthAction";
import { Header } from "../../components";

const RegisterScreen = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is set to "user"
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const onRegister = async () => {
    if (nama && email && nohp && password) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
        status: role,
        saldo: 0, 
      };

      try {
        const user = await registerUser(data, password);
        navigation.replace("LoginScreen");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
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
            placeholder="Username"
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
            placeholder="HandPhone"
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
      </ImageBackground>
    </Box>
  );
};

export default RegisterScreen;
