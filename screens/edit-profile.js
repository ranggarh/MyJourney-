import React, { useState } from "react";
import { Box, Image, Input, Pressable, ScrollView } from "native-base";
import { Header } from "../components";
import { ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const EditProfile = () => {
    const [nama, setNama] = useState("");

    const clearInput = () => {
        setNama("pesan dihapus");
    };


    return(
        <>
            <Header title={"Edit Profile"} withBack={true} withCheck={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground style={{width: "100%", height: 300}} blurRadius={3} source={require("../assets/profile.jpeg")}>
                    <Box flex={1} bg="rgba(0, 0, 0, 0.6)" justifyContent={"center"} alignItems={"center"}>
                        <Image source={require("../assets/profile.jpeg")} alt="Profile Picture" h={150} w={150} borderRadius={100} />
                        <Box w={"75%"}  mt={35} >
                            <Input focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} value={nama}  placeholder="Masukkan Username Baru" maxW={"auto"} color={"white"} onChangeText={(text) => setNama(text)} />
                            {nama !== "" && (
                                <Pressable position={"absolute"} right={2} top={3} onPress={clearInput}>
                                    <Ionicons name="close" size={20} color={"white"} />
                                </Pressable>
                            )}
                        </Box>
                    </Box>
                </ImageBackground>
                <Box flex={1} w={"90%"} alignSelf={"center"} p={4} >
                    <Input p={2} focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} placeholder="Nama Lengkap" InputLeftElement={<Ionicons name="person-outline" size={20} />}/>
                    <Input p={2} mt={5} keyboardType="numeric" focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} placeholder="NIK" InputLeftElement={<Ionicons name="person-outline" size={20} />}/>
                    <Input p={2} mt={5} focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} placeholder="Email" InputLeftElement={<Ionicons name="mail-outline" size={20} />}/>
                    <Input p={2} mt={5} focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} placeholder="Alamat" InputLeftElement={<Ionicons name="home-outline" size={20} />}/>
                    <Input p={2} mt={5} keyboardType="numeric" focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} placeholder="No HP" InputLeftElement={<Ionicons name="call-outline" size={20} />}/>

                </Box>
            </ScrollView>
        </>
    )
}

export default EditProfile;