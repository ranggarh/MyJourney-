import React, { useState, useEffect } from "react";
import { Box, Image, Input, Pressable, ScrollView } from "native-base";
import { Header } from "../components";
import { ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getData } from "../src/utils/localStorage/index.js";

const EditProfile = () => {
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState(0);
    const [email, setEmail] = useState("");
    const [nik, setNik] = useState("");
    const [alamat, setAlamat] = useState("");

    const [profile, setProfile] = useState(null);

    const fetchData = async () => {
        try {
          const user = await getData('user');
          console.log('User Data:', user);
          setProfile(user);
          setNama(user?.nama || 'Nama Belum Terdaftar');
          setNohp(user?.nohp || 'No Hp Belum Terdaftar');
          setEmail(user?.email || 'Email Belum Terdaftar');
          setNik(user?.nik || 'Nik Belum Terdaftar');
          setAlamat(user?.alamat || 'Alamat Belum Terdaftar'); // Set the name to the user's name or an empty string if not available
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

    const clearInput = () => {
        setNama("pesan dihapus");
    };
    

    return(
        <>
            <Header title={"Detail Profile"} withBack={true} withCheck={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground style={{width: "100%", height: 300}} blurRadius={3} source={require("../assets/background.png")}>
                    <Box flex={1} bg="rgba(0, 0, 0, 0.6)" justifyContent={"center"} alignItems={"center"}>
                    <Ionicons name="person-circle-outline" size={128} color={"white"}></Ionicons>
                        <Box w={"75%"}  mt={35} >
                            <Input focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} value={nama}  placeholder="Masukkan Username Baru" maxW={"auto"} color={"white"} onChangeText={(text) => setNama(text)} />
                           
                        </Box>
                    </Box>
                </ImageBackground>
                <Box flex={1} w={"90%"} alignSelf={"center"} p={4} >
                    <Input p={2} focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} value={nama} InputLeftElement={<Ionicons name="person-outline" size={20} />}/>
                    <Input p={2} mt={5} keyboardType="numeric" focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} value={nik} InputLeftElement={<Ionicons name="person-outline" size={20} />}/>
                    <Input p={2} mt={5} focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} value={email}  InputLeftElement={<Ionicons name="mail-outline" size={20} />}/>
                    <Input p={2} mt={5} focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} value={alamat} InputLeftElement={<Ionicons name="home-outline" size={20} />}/>
                    <Input p={2} mt={5} keyboardType="numeric" focusOutlineColor={"#28AA9B"} fontSize={14} variant={"underlined"} value={nohp} InputLeftElement={<Ionicons name="call-outline" size={20} />}/>

                </Box>
            </ScrollView>
        </>
    )
}

export default EditProfile;