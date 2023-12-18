import { Heading, Text, Box, Image, ScrollView, Pressable } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useEffect } from 'react';
import datas from "../datas";
import  {fetchDataFromFirebase}  from '../src/actions/fetchSewa.js';

const SewaAlat = ({ route }) => {
  const params = route.params.item;
  const navigation = useNavigation();
  const [sewaData, setSewaData] = useState([]);

  // Create state variables for each item's ticket count
  const [sewaCounts, setSewaCounts] = useState(Array(6).fill(0));

  // Keep track of the total payment
  let totalSewa = 0;
  const fetchData = async () => {
    try {
      const data = await fetchDataFromFirebase();
      setSewaData(data);
    } catch (error) {
      // console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const incrementSewa = (index) => {
    const newSewaCounts = [...sewaCounts];
    newSewaCounts[index] += 1;
    setSewaCounts(newSewaCounts);
  };

  const decrementSewa = (index) => {
    if (sewaCounts[index] > 0) {
      const newSewaCounts = [...sewaCounts];
      newSewaCounts[index] -= 1;
      setSewaCounts(newSewaCounts);
    }
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  return (
    <>
      <Header title={"Outdoor Equipment"} withBack="true" />
      <ScrollView p={4} backgroundColor={"white"}>
        <Box borderRadius={4} backgroundColor={"#0383A2"} borderColor={"coolGray.300"}>
          <Heading color="white" p={3} fontSize={15}>Choose Your Outdoor Equipment</Heading>
        </Box>
        {sewaData.map((item, index) => {
          // Calculate the total for each item
          const itemTotal = sewaCounts[index] * item.harga;
          totalSewa += itemTotal;

          return (
            <React.Fragment key={index}>
              <Box p={"4"} borderColor={"coolGray.300"} borderWidth={1} borderRadius={10} flexDirection="row" flex={1}>
                <Box flex={1} >
                  <Heading mt={15} mb={5} fontSize={18}>
                    {item.namabarang}
                  </Heading>
                  <Text mb={1}>{item.deskripsi}</Text>
                  <Text fontWeight="bold" textAlign="left">
                    Price: {formatCurrency(item.harga)}
                  </Text>
                </Box>
                <Box flex={1} mr={1} >
                  <Image
                    
                    borderRadius={10}
                    source={{ uri: item.imageURL }}
                    w={"350"}
                    h={"40"}
                    alt="Image"
                  />
                </Box>
              </Box>
              <Box flexDirection="row" marginTop={5} marginRight={9}>
                <Heading fontSize={15} ml={5}>
                  Number of Equipment
                </Heading>
                <Ionicons
                  style={{ color: "#28AA9B", marginLeft: 80 }}
                  size={20}
                  name="remove-circle-outline"
                  onPress={() => decrementSewa(index)}
                />
                <Text mx="auto">{sewaCounts[index]}</Text>
                <Ionicons
                  style={{ color: "#28AA9B" }}
                  size={20}
                  name="add-circle-outline"
                  onPress={() => incrementSewa(index)}
                />
              </Box>
              <Box flexDirection="row" marginTop={5} marginBottom={5}>
                <Heading fontSize={15} ml={5}>
                  Total 
                </Heading>
                <Ionicons style={{ color: "#28AA9B", marginLeft: 160 }} size={20}>
                  <Heading fontSize={15} mx="auto"> {formatCurrency(itemTotal)}</Heading>
                </Ionicons>
              </Box>
            </React.Fragment>
          );
        })}

        <Box borderBottomWidth={1} borderTopWidth={1} borderColor={"coolGray.300"}>

        </Box>
      </ScrollView>
      <Pressable onPress={() => navigation.navigate("DetailOrder",{item:params, totalSewa: totalSewa})} backgroundColor={"#28AA9B"} _pressed={{ bg: "#0383A2", borderRadius: '10' }} >
        <Heading alignSelf="center" color="white" p={4} fontSize={15}>Total Payment : {formatCurrency(totalSewa)}</Heading>
      </Pressable>
    </>
  );
};

export default SewaAlat;
