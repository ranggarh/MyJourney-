import { SafeAreaView } from "react-native-safe-area-context";
import { Box, HStack, Text, Image, Heading, Pressable, StatusBar } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, withBack = false }) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={trueGray900} />
      <Box bg="#28AA9D" p={"4"}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
              </>
            ) : (
              <Pressable
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"24"}>
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </Pressable>
            )}
            <Heading ml={-3} color={"white"}>{title}</Heading>
          </HStack>

          
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;


// import React, { useState } from 'react';
// import { StatusBar, TouchableOpacity } from 'react-native';
// import { Text } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Box, Image, Pressable } from 'native-base';
// import { useNavigation } from '@react-navigation/native';

// const Header = ({title, withback=false}) => {
//     const navigation=useNavigation();
//     return(
//         <Box flex={1}>
//             <StatusBar barStyle="dark-content" backgroundColor="#ffffff">
//             <Box
//                 backgroundColor='#ffffff'
//                 elevation= {3}
//                 paddingVertical= {15}
//                 flexDirection= 'row'
//                 alignItems= 'center'
//             >
//                 <Pressable 
//                     justifyContent= 'center'
//                     alignItems= 'center'
//                     width= {30}
//                     height= {30}
//                     borderRadius={3}
//                     marginLeft= {25}
//                 >
//                     <Icon name='angle-left' size={30} />
//                 </Pressable>
//                 <Box flex={1}>
//                     <Text fontWeight= 'bold' marginLeft= {90} fontSize= {22}>
//                         Lumajang
//                     </Text>
//                 </Box>
//             </Box>    
//             </StatusBar>
//         </Box>
//     );
// };

// export default Header;