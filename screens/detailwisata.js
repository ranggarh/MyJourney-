import { Box, Stack, Heading, HStack, Image, Center, Text, ScrollView } from "native-base";
import React, { useState, } from "react";
import { Pressable } from "native-base";
import { TouchableOpacity } from "react-native";
import { AspectRatio } from "native-base";
import Header from '../components/header';
import { useNavigation } from "@react-navigation/native";

// untuk akses item yg dikirim saat navigation ke DetailWisata
const DetailWisata = ({ route }) => {
    const params = route.params.item; 
    // params = nyimpan data dari route sebelumnya
    const navigation = useNavigation();
    const formatCurrency = (value) => {
        return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
      };

    return(
        <>
        <Header title={"Detail Wisata"} withBack="true"/>
        <ScrollView>
        <Box>
            {/* <Header title={"Detail Wisata"} withBack="true"/> */}
            <Box maxW="100%">
                <Box>
                <AspectRatio w="100%" ratio={15 / 17}>
                    <Image source={{ uri: params.imageURL}} alt="Image Data"></Image>
                </AspectRatio>
                </Box>
            </Box>
            <Box marginTop={"-10"} backgroundColor={"light.100"} borderRadius={45}>    
                <Stack p="10" h="100%" space={3}>
                <Stack space={6}>
                    <Heading size="lg" ml="-1">
                        {params.namawisata}
                    </Heading>
                    <Text fontSize="sm" ml={-1} mt={-6} >
                        
                    </Text>
                    <Text color="#0383A2" fontSize="xs" fontWeight="500" ml="-1" mt="-4">
                         {params.kota}
                    </Text>
                </Stack>
                <Text ml={-1.5}>{params.deskripsi} </Text>
    
                <Pressable onPress={ () => navigation.navigate("Berita")} >
                    <HStack alignItems="center" space={3} justifyContent="space-between">
                        <HStack alignItems="center">
                        <Text fontSize={15} ml={-1.5} textAlign="center" color="#0383A2" underline={true} fontWeight="500">
                             Latest News
                        </Text>
                        </HStack>
                    </HStack>
                </Pressable>
    
                <Box flexDirection="row" justifyContent="space-between">
                    <Text fontSize={19} color="#0383A2" fontWeight="800" mt={7}>{formatCurrency(params.harga)}</Text>
                    
                    {/* mengarahkan pressable ke fungsi diatas */}
                    <Pressable onPress={()=>navigation.navigate("DetailOrder",{ item: params })}>
                        <Box backgroundColor="#0383A2" padding={3} marginLeft={8} borderRadius={8} marginTop={5}>
                            <Text marginLeft={2} marginRight={2} color="white">Book Now</Text>
                            {/* state booking dipanggil disini */}
                        </Box>
                    </Pressable>
                </Box>
                </Stack>
            </Box>
        </Box>
        </ScrollView>
        </>
        );
    };

export default DetailWisata;

