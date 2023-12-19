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
    
    // nambah state booking
    // const [booking, setBookNow] = useState("Book Now");

    // buat fungsi untuk mengubah Book Now
    // nilai awal = Book Now
    //  di klik ganti = Sold Out
    // const changeBookNow = () => {
    //     if (booking === "Book Now") {
    //         setBookNow("Sold Out");
    //     }
    // };

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
                        {params.title_wisata}
                    </Heading>
                    <Text fontSize="sm" ml={-1} mt={-6} >
                        {params.star}
                    </Text>
                    <Text color="#0383A2" fontSize="xs" fontWeight="500" ml="-1" mt="-4">
                    Lumajang, Jawa Timur, Indonesia
                    </Text>
                </Stack>
                <Text ml={-1.5}>{params.content} </Text>
    
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
                    <Text fontSize={19} color="#0383A2" fontWeight="800" mt={7}>{formatCurrency(params.hargaTiket)}</Text>
                    
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


// import { Box, Stack, Heading, HStack, Image, Center, Text, ScrollView } from "native-base";
// import React from "react";
// import { Pressable } from "native-base";
// import { TouchableOpacity } from "react-native";
// import { AspectRatio } from "native-base";
// import Header from '../components/header';
// import { useNavigation } from "@react-navigation/native";


// const DetailWisata = () => {
//     const navigation = useNavigation();
//     return(

//     <ScrollView>
//     <Box>
//         <Header title={"Detail Wisata"} withBack="true"/>
//         <Box maxW="100%">
//             <Box>
//             <AspectRatio w="100%" ratio={15 / 17}>
//                 <Image source={{
//                 uri: "https://i.pinimg.com/564x/c4/59/40/c4594009bf8c7624a4575002f3f9778b.jpg"
//             }} alt="image" />
//             </AspectRatio>
//             </Box>
//         </Box>
//         <Box marginTop={"-10"} backgroundColor={"light.100"} borderRadius={45}>    
//             <Stack p="10" h="100%" space={3}>
//             <Stack space={6}>
//                 <Heading size="lg" ml="-1">
//                 Semeru Mountain
//                 </Heading>
//                 <Text color="#28AA9B" fontSize="xs" fontWeight="500" ml="-0.5" mt="-5">
//                 Lumajang, Jawa Timur, Indonesia
//                 </Text>
//             </Stack>
//             <Text fontWeight="400">
//             Gunung Semeru atau Gunung Meru adalah sebuah gunung berapi kerucut di Jawa Timur, Indonesia. Gunung Semeru merupakan gunung tertinggi di Pulau Jawa, dengan puncaknya Mahameru, 3.676 meter dari permukaan laut (mdpl). Gunung ini terbentuk akibat subduksi Lempeng Indo-Australia kebawah Lempeng Eurasia.
//             </Text>

//             <Pressable onPress={ () => navigation.navigate("NewsDetail")} >
//                 <HStack alignItems="center" space={3} justifyContent="space-between">
//                     <HStack alignItems="center">
//                     <Text fontSize={15} textAlign="center" color="#28AA9B" fontWeight="400">
//                         News
//                     </Text>
//                     </HStack>
//                 </HStack>
//             </Pressable>

//             <Box flexDirection="row">
//                 <Text fontSize={19} color="#28AA9B" fontWeight="800" mt={7}>
//                 Rp. 50.000 / Person           
//                 </Text>
//                 <Pressable>
//                     <Box backgroundColor="#28AA9B" padding={3} marginLeft={5} borderRadius={8} marginTop={5}>
//                         <Text marginLeft={2} marginRight={2} color="white">Book Now</Text>
//                     </Box>
//                 </Pressable>
//             </Box>
//             </Stack>
//         </Box>
//     </Box>
//     </ScrollView>
//     );
// };

// export default DetailWisata;