import { Heading, Image, Text, FlatList, Pressable, Box, Input, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import datas from "../datas";
import { ImageBackground } from "react-native";
import  {fetchDataFromFirebase}  from '../src/actions/fetchBerita.js';
import React, {useState,useEffect} from "react";

const Berita = () => {
  const navigation = useNavigation();
  const [beritaData, setBeritaData] = useState([]);

  // Create state variables for each item's ticket count

  // Keep track of the total payment
  const fetchData = async () => {
    try {
      const data = await fetchDataFromFirebase();
      setBeritaData(data);
    } catch (error) {
      // console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderitem = ({ item }) => {
    return (
      <Pressable
        activeOpacity={0.5}
        onPress={() => navigation.navigate("News Detail", { item: item })}
      >
        <Box
          p={"4"}
          borderBottomColor={"coolGray.300"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
          <Box flex={1} mr={"4"}>
            <Image
              source={{ uri: item.imageURL }}
              w="500"
              h="40"
              borderRadius={10}
              alt="Image Data"
            />
          </Box>
          <Box flex={1}>
            <Text fontSize={"sm"}>{item.date}</Text>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.namaberita}
            </Heading>
          </Box>
        </Box>
      </Pressable>
    );
  };

  return (
    <>
      
      <Header title={"Hot News"} />
      
      <Box p={4}>
      <Input
      size="xl"
      w="full"
      placeholder="Search for Article"
      borderRadius={10}
      borderColor="muted.400"
      InputLeftElement={
        <Icon
          as={<Ionicons name="search" />}
          size={5}
          ml={4}
          color="muted.500"
        />
      }
    />
    </Box>
      <FlatList
        data={beritaData}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      
    </>
  );
};

export default Berita;