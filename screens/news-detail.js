import { Heading, Center, Text, Box, Image, ScrollView } from "native-base";
import { Header } from "../components";
import { fetchBeritaDataFromFirebase } from "../src/actions/fetchBerita";
import React,{useEffect, useState} from "react";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  const [beritaData, setBeritaData] = useState([]);
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


  return (
    <>
      <Header title={"News"} withBack="true" />
      <ScrollView>
        <Image  source={{uri: params.imageURL}} w={"full"} h={"48"} alt="Image"/>
        <Box p={"4"} borderBottomColor={"coolGray.300"} borderBottomWidth={1} >
          
          <Heading>{params.namaberita}</Heading>
        </Box>
        <Box p={"4"}>
          <Text>
          {params.deskripsi}
          </Text>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
