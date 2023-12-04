import { Heading, Image, Text } from "native-base";
import { Box, ScrollView, Stack, Input, Icon, Pressable, HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";
import Ionicons from "@expo/vector-icons/Ionicons";
import {TouchableOpacity}from "react-native"


const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title={"Home"} />
      <ScrollView>
        <Box p={5} backgroundColor="white">
          <Heading mt={6} size="2xl">My Journey </Heading>
          <Heading size="sm">Make Your Journey</Heading>
        </Box>
        <Box backgroundColor="white">
          <Stack mt={10} >
            <Input size="xl" w="90%" ml={5} placeholder="Search " borderRadius={10} InputLeftElement={
                <Icon as={<Ionicons name="search" />} size={8} ml="4" color="muted.400"/>
            }/>
          </Stack>
          <Heading size="lg" mt={10} marginLeft={5} color="#B3B3B3">Top Destination</Heading>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} mt={10} mb={2}  >
            {datas.slice(1).map((item, index) => {
              return (
                <TouchableOpacity activeOpacity={0.5} key={index} onPress={() =>navigation.navigate("DetailWisata", { item: item })}>
                  <Box 
                  w={"48"} 
                  h="64" 
                  mr={"4"}  
                  ml={index == 0 ? "4" : "0"}   
                  borderRadius={30} 
                  borderColor="coolGray.100" 
                  borderWidth={4} 
                  mb={30}
                  >
                    <Image
                    borderTopRadius={25}
                      source={{ uri: item.image }}
                      w="full"
                      h="4/6"
                      alt="Image Data"
                    />
                    <Text fontSize="md" color="grey" ml={2}   >
                      {item.emoji}
                    </Text>
                    <Heading
                      fontSize={"md"}
                      lineHeight={"xs"}
                      ellipsizeMode="tail"
                      numberOfLines={2}
                      color="grey"
                      borderRadius={20}
                      ml={2}
                      mb={1}  
                    >{item.title_wisata} 
                    </Heading>
                    <Box ml={2}>
                    <Ionicons name="location" color="#28AA9B" size={14}  > {item.kota}  </Ionicons>
                    </Box>
                  </Box>
                </TouchableOpacity>             
              );           
            })}        
          </ScrollView>
          
          <Box >
          <Heading size="sm"  ml={5} mb={5} >CATEGORIES</Heading>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} mb={5}  >
           
            {datas.slice(1).map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  onPress={() =>
                    navigation.navigate("Listwisata", { item: item })
                  }
                >
                  <Box 
                  w={"40"} 
                  h={10} 
                  mr={"4"} 
                  ml={index == 0 ? "4" : "0"} borderWidth={3} 
                  borderColor="coolGray.100" 
                  borderRadius={20} 
                  p={1} backgroundColor="white" 
                  alignItems="center"
                  >
                  <HStack>
                  <Image
                   source={{ uri: item.image }}
                  w="7"
                  h="7"
                  alt="CNN Logo"
                  ml={"4"}
                  borderRadius={20}
                  justifyContent={'center'}
                />
                    <Text bold fontSize={"sm"}  color="black" ml={4} mr={10} >
                      {item.kategori}
                    </Text>
                  </HStack>
                  </Box>
                </TouchableOpacity>             
              );           
            })}     
            
          </ScrollView>
          </Box>
        </Box>
      </ScrollView>
      
      
      {/* <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      /> */}
      
    </>
  );
};



export default Home;