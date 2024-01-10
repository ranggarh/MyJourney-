import React, { useState } from "react";
import { Box, Text, Input, Button, Alert, Modal, ModalBackdrop, Heading, Select, ScrollView,Image } from "native-base";
import { ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { registerUser } from "../../src/actions/AuthAction";
import { Header } from "../../components";

const RegisterScreen = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [nik, setNik] = useState("");
  const [alamat, setAlamat] = useState("");
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
      if (nama && email && nohp && password && nik && alamat) {
        // Prepare user data for registration
        const userData = {
          nama: nama,
          nik: nik,
          alamat: alamat,
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
        <Text fontSize={22} color={"white"} textAlign={"center"} fontWeight={"bold"} mb={10}>Register Account</Text>
      </Box>
      <Text fontSize={16} mb={2} color={"white"}>
       Nama Lengkap
      </Text>
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
       <Text fontSize={16} mt={2} mb={2} color={"white"}>
       No.Handphone
      </Text>
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

        <Text fontSize={16} mt={2} mb={2} color={"white"}>
          Alamat
          </Text>
          <Input
                my={2}
                label="Alamat"
                value={alamat}
                onChangeText={(alamat) => setAlamat(alamat)}
                placeholder="Masukkan Alamat"
                borderColor="white"
                borderWidth={"2"}
                placeholderTextColor="white"
                fontSize={18}
                color="white"
              />
            
            
        <Text fontSize={16} mt={2} mb={2} color={"white"}>
       NIK
      </Text>
      <Input
            my={2}
            label="nik"
            value={nik}
            onChangeText={(nik) => setNik(nik)}
            placeholder="Masukkan NIK"
            borderColor="white"
            borderWidth={"2"}
            placeholderTextColor="white"
            fontSize={18}
            color="white"
          />
        <Text fontSize={16} mt={2} mb={2} color={"white"}>

      Email
      </Text>
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
      <Text fontSize={16} mt={2} mb={2} color={"white"}>
       Password
      </Text>
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

export default RegisterScreen;
