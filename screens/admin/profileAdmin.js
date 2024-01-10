import { Box, Image, Text, Pressable, HStack, Modal, VStack, Button } from "native-base";
import React, {useState,useEffect} from "react";
import { ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components";
import { logoutUser } from "../../src/actions/AuthAction";
import  {fetchDataFromFirebase}  from '../../src/actions/fetchauth.js';

const ProfileAdmin = () => {
    const navigation = useNavigation();
    const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

    const handleLogout = () => {
        setIsLogoutModalVisible(true);
    };

      const confirmLogout = () => {
        // Call your logout function here
        // For example: logoutUser();
        // Then navigate to the login screen
        logoutUser();
        {console.log('Log Out Berhasil')}
        navigation.navigate("LoginScreen");
      };

      const closeLogoutModal = () => {
        setIsLogoutModalVisible(false);
      };

    return(
        <>
            <Header title={"Profile"}  />
            <ImageBackground source={require("../../assets/image_back.jpg")} blurRadius={3} style={{flex:1, resizeMode:"cover"}}>
                <Box mt={10} ml={18}>
                </Box>
                <Box flex={1} mt={50} alignSelf={"center"} alignItems={"center"} >
                    <Ionicons name="person-circle-outline" size={128} color={"#0383A2"}></Ionicons>
                    <Text fontSize={24} bold>
                     Admin My Journey
                    </Text>
                </Box>
                <Box flex={1} mb={150} >
                    <Box mb={5} >
                        <Pressable onPress={() => navigation.navigate("Edit Profile")} justifyContent={"center"} alignSelf={"center"} w={312} h={46} borderRadius={100} bg={"white"}>
                            <HStack mr={2} justifyContent={"space-between"} alignItems={"center"} >
                                <HStack alignItems={"center"} ml={15}>
                                    <Ionicons name="person-circle-outline" size={30} />
                                    <Text ml={2} fontSize={17}>
                                        Detail Profile 
                                    </Text>
                                </HStack>
                                <Ionicons name="chevron-forward-outline" size={20} />
                            </HStack>
                        </Pressable>
                    </Box>
                    
                    <Box mb={5}>
                        <Pressable onPress={handleLogout} justifyContent={"center"} alignSelf={"center"} w={312} h={46} borderRadius={100} bg={"white"}>
                            <HStack mr={2} justifyContent={"space-between"} alignItems={"center"} >
                                <HStack alignItems={"center"} ml={15}>
                                    <Ionicons name="log-out" size={30} />
                                    <Text ml={2} fontSize={17}>
                                        Logout 
                                    </Text>
                                </HStack>
                                <Ionicons name="chevron-forward-outline" size={20} />
                            </HStack>
                        </Pressable>
                    </Box>
                </Box>
            </ImageBackground>
            <Modal isOpen={isLogoutModalVisible} onClose={closeLogoutModal}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Logout Confirmation</Modal.Header>
            <Modal.Body>
              <Text>Are you sure you want to logout?</Text>
            </Modal.Body>
            <Modal.Footer>
              <HStack space={2} alignItems="center">
                <Button onPress={closeLogoutModal}>Cancel</Button>
                <Button colorScheme="danger" onPress={confirmLogout}>
                  Logout
                </Button>
              </HStack>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        </>

    );
};

export default ProfileAdmin;
