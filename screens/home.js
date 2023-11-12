import { Heading, Image, Text, FlatList, Center } from "native-base";
import { Box, ScrollView, Stack, Input, Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";
import Ionicons from "@expo/vector-icons/Ionicons";


const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title={"News"} />
      <Box p={5}   backgroundColor="white">
        <Heading size="2xl">My Journey </Heading>
        <Heading size="sm">Make Your Journey</Heading>
      </Box>
      <Box backgroundColor="white">
        <Stack mt={10} >
          <Input
            size="xl"
            w="90%"
            ml={5}
            placeholder="Search "
            borderRadius={10}
            InputLeftElement={
              <Icon
                as={<Ionicons name="search" />}
                size={8}
                ml="4"
                color="muted.400"
              />
            }
          />
        </Stack>
        <Heading size="lg" mt={10} marginLeft={5} color="#B3B3B3">Top Destination</Heading>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} mt={10}  >
          {datas.slice(14).map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                onPress={() =>
                
                  navigation.navigate("News Detail", { item: item })
                }
              >
                <Box 
                w={"48"} 
                h="64" 
                mr={"4"}  
                ml={index == 0 ? "4" : "0"}   
                borderRadius={30} 
                borderColor="coolGray.100" 
                borderWidth={4} 
                mb={30}>
  
                  <Image
                  borderRadius={20}
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
                    
                  >
                    {item.name}
                    
                  </Heading>
                  <Box ml={2}>
                  <Ionicons name="location" color="#28AA9B" size={14}  > {item.lokasi}  </Ionicons>
                  </Box>
                </Box>
              </TouchableOpacity>             
            );           
          })}        
        </ScrollView>
        
        <Box >
        <Heading size="sm"  ml={5} mb={5} >CATEGORIES</Heading>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
          {datas.slice(14).map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                onPress={() =>
                  navigation.navigate("News Detail", { item: item })
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
                 
                  <Text bold fontSize={"sm"}  color="black"  >
                    {item.categories}
                  </Text>
                </Box>
              </TouchableOpacity>             
            );           
          })}        
        </ScrollView>
        </Box>
      </Box>
      
      
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