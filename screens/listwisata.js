import { Heading, Image, Text, FlatList, Row } from "native-base";
import { Box, ScrollView, Pressable } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/header";
import datas from "../datas";

const Listwisata = () => {
  const navigation = useNavigation();

  // renderitem menerima item from datas
  const renderitem = ({ item }) => {
    return (
      <Pressable
        activeOpacity={0.5}
        // membawa data tiap item
        onPress={() => navigation.navigate("DetailWisata", { item: item })} 
      >
        <Box
            backgroundColor= "white"
            height= {250}
            alignItems= 'center'
            borderRadius= {10}
            elevation= {2}
            my={2}
        >
          <Image
                source={{
                  uri: item.avatarUrl
                }}
                size={180}
                borderRadius={10}
                alt="Image Data"
          ></Image>

          <Box flex={1.8}>
            <Heading mt={2.5} lineHeight={"lg"} fontSize={"md"} textAlign="center">
              {item.title} 
            </Heading>
            <Text fontSize="sm" alignSelf={"center"}>
                {item.star}
            </Text>
          </Box>
        </Box>
      </Pressable>
    );
  };

  return (
    <>
      <Header title={"Lumajang"} withBack="true" />
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns="2"
        mx={2}
        my={2}
      />
    </>
  );
};

export default Listwisata;



// import React, { useState } from 'react';
// import { StatusBar, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { FlatGrid } from 'react-native-super-grid';
// import { Box, Image, Text, Pressable, ScrollView, FlatList } from 'native-base';
// import { useNavigation } from '@react-navigation/native';
// import Header from '../components/header';

// const Listwisata = () => {
//     const navigation = useNavigation();
//   const [data] = useState([
//     { namaWarung: 'Semeru Mountain', avatarUrl: 'https://i.pinimg.com/564x/c4/59/40/c4594009bf8c7624a4575002f3f9778b.jpg' },
//     { namaWarung: 'Bromo Mountain', avatarUrl: 'https://i.pinimg.com/564x/f9/04/e1/f904e103a9e53cdbca619783e646f00c.jpg' },
//     { namaWarung: 'Tumpak Sewu Waterfall', avatarUrl: 'https://i.pinimg.com/564x/f4/10/c9/f410c91c2003b11a79e046a966c3d604.jpg' },
//     { namaWarung: 'B-29', avatarUrl: 'https://i.pinimg.com/564x/27/4e/4e/274e4e506ff52a2813298765908c57d7.jpg' },
//     { namaWarung: 'Kapas Biru Waterfall', avatarUrl: 'https://i.pinimg.com/564x/ff/f5/05/fff50575abf1a147e7c4e7bf10629b4a.jpg' },
//     { namaWarung: 'Kabut Pelangi Waterfall', avatarUrl: 'https://i.pinimg.com/564x/f3/77/2b/f3772bbd8a1599a7bf1cc9f374b66a9f.jpg' },
//   ]);

//   return (
    
//     <Box flex={1}>
//       <Header title={"Lumajang"} withBack="true" />

//       {/* ISI WISATA */}
//       <FlatList
//         columnWrapperStyle={{justifyContent: 'space-between'}}
//         data={data}
//         numColumns="2"
//         mx={2}
//         my={5}
        
//         renderItem={({ item, index }) => (
//           <Pressable
//             activeOpacity={0.5}
//             marginBottom={"3"}
//             onPress={() => navigation.navigate("DetailWisata", { item: item })}
//           >
//             <Box
//               backgroundColor= '#ffffff'
//               height= {250}
//               justifyContent= 'center'
//               alignItems= 'center'
//               borderRadius= {10}
//               elevation= {2}
//             >
//               <Image
//                 source={{
//                   uri: item.avatarUrl
//                 }}
//                 size={180}
//                 mt={"-9"}
//                 borderRadius={10}
//                 alt="Image Data"
//               ></Image>

//               <Text mt={3} fontWeight= 'bold'>
//                 {item.namaWarung}
//               </Text>
//             </Box>
//           </Pressable>
//         )}
//       />
//     </Box>
    
//   );
// };

// export default Listwisata;