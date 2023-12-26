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
              <Box p={"2"} borderColor={"coolGray.300"} borderWidth={1} borderRadius={10} flexDirection="row" flex={1}>
                <Box flex={1} mr={10} >
                  <Heading mt={15} mb={5} ml={2} fontSize={18}>
                    {item.namabarang}
                  </Heading>
                  <Text mb={1} ml={2}>{item.deskripsi}</Text>
                  <Text ml={2} fontWeight="bold" textAlign="left">
                    Price: {formatCurrency(item.harga)}
                  </Text>
                </Box>
                <Box flex={1} mr={3} >
                  <Image
                    borderRadius={10}
                    source={{ uri: item.imageURL }}
                    w={"500"}
                    h={"40"}
                    alt="Image"
                  />
                </Box>
              </Box>
              <Box flexDirection="row" marginTop={3} marginRight={5}>
                <Heading fontSize={15} ml={4}>
                  Number of Equipment
                </Heading>
                <Ionicons
                  style={{ color: "#0383A2", marginLeft:80, marginTop:-2 }}
                  size={25}
                  name="remove-circle-outline"
                  onPress={() => decrementSewa(index)}
                />
                <Text mx="auto">{sewaCounts[index]}</Text>
                <Ionicons
                  style={{ color: "#0383A2", marginTop:-2 }}
                  size={25}
                  name="add-circle-outline"
                  onPress={() => incrementSewa(index)}
                />
              </Box>
              <Box flexDirection="row" marginTop={1} marginBottom={7}>
                <Heading fontSize={15} ml={4}>
                  Total 
                </Heading>
                <Ionicons style={{ color: "#28AA9B", marginLeft: 185 }} size={20}>
                  <Heading fontSize={15} mx="auto"> {formatCurrency(itemTotal)}</Heading>
                </Ionicons>
              </Box>
            </React.Fragment>
          );
        })}

        <Box borderBottomWidth={1} borderTopWidth={1} borderColor={"coolGray.300"}>

        </Box>
      </ScrollView>
      <Pressable
  onPress={() => {
    const selectedItems = sewaData
      .map((item, index) => ({
        namaBarang: item.namabarang,
        jumlah: sewaCounts[index],
        total: sewaCounts[index] * item.harga,
        imageURL: item.imageURL, // Pass imageURL here
      }))
      .filter((item) => item.jumlah > 0);

    navigation.navigate("DetailOrder", {
      item: params,
      totalSewa: totalSewa,
      selectedItems: selectedItems,
    });
  }}
  backgroundColor={"#0383A2"}
  _pressed={{ bg: "#0383A2", borderRadius: '10' }}
>
  <Heading alignSelf="center" color="white" p={4} fontSize={15}>
    Total Payment : {formatCurrency(totalSewa)}
  </Heading>
</Pressable>
    </>
  );
};

export default SewaAlat;
