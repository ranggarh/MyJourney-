import React, { useState, useEffect } from "react";
import { Heading, Image, Text, Box, Input, Icon, FlatList, Pressable } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import { fetchBeritaDataFromFirebase } from '../src/actions/fetchBerita';

const Berita = () => {
  const navigation = useNavigation();
  const [beritaData, setBeritaData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetchBeritaDataFromFirebase();
      setBeritaData(data);
    } catch (error) {
      // Handle the error
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderitem = ({ item }) => {
    // Add this check to filter items based on the search term
    if (
      searchTerm.length === 0 ||
      item.namaberita.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
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
    }
    return null; // Skip rendering if not matching the search term
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
          onChangeText={(text) => setSearchTerm(text)}
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
