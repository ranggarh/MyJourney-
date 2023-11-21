import { Box, Image, Text, Pressable, HStack } from "native-base";
import { ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const Profile = () => {
    const navigation = useNavigation();
    return(
        <>
            <ImageBackground source={require("../assets/background.png")} style={{flex:1, resizeMode:"cover"}}>
                <Box mt={10} ml={18}>
                </Box>
                <Box flex={1} mt={50} alignSelf={"center"} alignItems={"center"} >
                    <Image source={require("../assets/profile.jpeg")} w={128} h={128} borderRadius={100} alt="Profile Picture"/>
                    <Text fontSize={24} bold>
                        USERNAME
                    </Text>
                    <Text fontSize={15} mt={-2} >
                        yourname@gmail.com
                    </Text>
                </Box>
                <Box flex={1} mb={120} >
                    <Box mb={5} >
                        <Pressable onPress={() => navigation.navigate("Edit Profile")} justifyContent={"center"} alignSelf={"center"} w={312} h={46} borderRadius={100} bg={"white"}>
                            <HStack mr={2} justifyContent={"space-between"} alignItems={"center"} >
                                <HStack alignItems={"center"} ml={15}>
                                    <Ionicons name="person-circle-outline" size={30} />
                                    <Text ml={2} fontSize={17}>
                                        Profile 
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
                                        History
                                    </Text>
                                </HStack>
                                <Ionicons name="chevron-forward-outline" size={20} />
                            </HStack>
                        </Pressable>
                    </Box>
                    <Box mb={5}>
                        <Pressable onPress={() => navigation.navigate("Sewa Alat")} justifyContent={"center"} alignSelf={"center"} w={312} h={46} borderRadius={100} bg={"white"}>
                            <HStack mr={2} justifyContent={"space-between"} alignItems={"center"} >
                                <HStack alignItems={"center"} ml={15}>
                                    <Ionicons name="list-outline" size={20}/>
                                    <Text ml={2} fontSize={17}>
                                         Sewa Alat 
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
