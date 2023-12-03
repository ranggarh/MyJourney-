import { Box, Image, Text, Pressable, HStack } from "native-base";
import { ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";

const Profile = () => {
    const navigation = useNavigation();
    return(
        <>
            <Header title={"Profile"}  />
            <ImageBackground source={require("../assets/image_back.jpg")} blurRadius={3} style={{flex:1, resizeMode:"cover"}}>
                <Box mt={10} ml={18}>
                </Box>
                <Box flex={1} mt={50} alignSelf={"center"} alignItems={"center"} >
                    {/* <Image source={require("../assets/profile.jpeg")} w={128} h={128} borderRadius={100} alt="Profile Picture"/> */}
                    <Ionicons name="person-circle-outline" size={128} color={"#0383A2"}></Ionicons>
                    <Text fontSize={24} bold>
                        Profile
                    </Text>
                </Box>
                <Box flex={1} mb={150} >
                    <Box mb={5} >
                        <Pressable onPress={() => navigation.navigate("Edit Profile")} justifyContent={"center"} alignSelf={"center"} w={312} h={46} borderRadius={100} bg={"white"}>
                            <HStack mr={2} justifyContent={"space-between"} alignItems={"center"} >
                                <HStack alignItems={"center"} ml={15}>
                                    <Ionicons name="person-circle-outline" size={30} />
                                    <Text ml={2} fontSize={17}>
                                        Edit Profile 
                                    </Text>
                                </HStack>
                                <Ionicons name="chevron-forward-outline" size={20} />
                            </HStack>
                        </Pressable>
                    </Box>
                    <Box mb={5}>
                        <Pressable onPress={()=> navigation.navigate("TopUp")} justifyContent={"center"} alignSelf={"center"} w={312} h={46} borderRadius={100} bg={"white"}>
                            <HStack mr={2} justifyContent={"space-between"} alignItems={"center"} >
                                <HStack alignItems={"center"} ml={15}>
                                    <Ionicons name="add-circle-outline" size={30}/>
                                    <Text ml={2} fontSize={17}>
                                         Top Up | e-Journey
                                    </Text>
                                </HStack>
                                <Ionicons name="chevron-forward-outline" size={20} />
                            </HStack>
                        </Pressable>
                    </Box>
                    <Box mb={5}>
                        <Pressable justifyContent={"center"} alignSelf={"center"} w={312} h={46} borderRadius={100} bg={"white"}>
                            <HStack mr={2} justifyContent={"space-between"} alignItems={"center"} >
                                <HStack alignItems={"center"} ml={15}>
                                    <Ionicons name="time" size={30} />
                                    <Text ml={2} fontSize={17}>
                                        History Purchase
                                    </Text>
                                </HStack>
                                <Ionicons name="chevron-forward-outline" size={20} />
                            </HStack>
                        </Pressable>
                    </Box>
                    
                    <Box mb={5}>
                        <Pressable onPress={() => alert('Logout')} justifyContent={"center"} alignSelf={"center"} w={312} h={46} borderRadius={100} bg={"white"}>
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
        </>

    );
};

export default Profile;
