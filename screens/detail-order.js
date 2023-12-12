import { Heading, Text, Box, Image, ScrollView, Pressable } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from 'react';

const DetailOrder = ({ route }) => {
  const params = route.params.item;
  const navigation = useNavigation();
  const [ticketCount, setTicketCount] = useState(1);

  const totalSewa = route.params.totalSewa ||0;
  const serviceFee = 5000;
  const hargaSewa = params.hargaSewa;
  const hargaTiket = params.hargaTiket;

  const incrementTicket = () => {
    setTicketCount(ticketCount + 1);
  };

  const decrementTicket = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  const totalDestination = (ticketCount * hargaTiket);
  const totalTicket = (ticketCount * hargaTiket) + totalSewa +serviceFee;

  return (
    <>
      <Header title={"Checkout"} withBack="true" />
      
      <ScrollView p={4}>
      <Box  borderRadius={4} backgroundColor={"#0383A2"} borderColor={"coolGray.300"}>
          <Heading color="white" p={3} fontSize={15}>Your Destination</Heading>
      </Box>
        
        <Box
          p={"4"}
          borderColor={"coolGray.300"}
          borderWidth={1}
          borderRadius={10}
          flexDirection="row"
          flex={1}
          
        >
          <Box flex={1} mr={4}>
            <Heading mt={35} fontSize={15} ml={4}>
              {params.title_wisata}
            </Heading>
            <Text mb={1} ml={4}>{params.emoji}</Text>
            <Text ml={4}>
              <Ionicons size={13} color="#28AA9B" name="location-outline">
                {params.kota}
              </Ionicons>
            </Text>
            <Text ml={4} fontWeight="bold" textAlign="left">
              Category: {params.kategori}
            </Text>
          </Box>
          <Box flex={1} mr={4}>
            <Image
              ml={1}
              borderRadius={10}
              source={{ uri: params.image }}
              w={"380"}
              h={"40"}
              alt="Image"
            />
          </Box>
        </Box>
        <Box flexDirection="row" marginTop={5} marginRight={9}>
          <Heading fontSize={15} ml={5}>
            Number of Ticket
          </Heading>
          <Ionicons
            style={{ color: "#28AA9B", marginLeft: 80 }}
            size={20}
            name="remove-circle-outline"
            onPress={decrementTicket}
          /> 
          <Text mx="auto" >{ticketCount}</Text>
          <Ionicons
            style={{ color: "#28AA9B" }}
            size={20}
            name="add-circle-outline"
            onPress={incrementTicket}
          />
        </Box>
        <Box flexDirection="row" marginTop={5}>
          <Heading fontSize={15} ml={5}>
            Price
          </Heading>
          <Ionicons style={{ color: "#28AA9B", marginLeft: 160 }} size={20}>
           <Heading fontSize={15} mx="auto" > {formatCurrency(ticketCount * hargaTiket)}</Heading>
          </Ionicons>
        </Box>
        {/* test */}
        <Box mt={4} borderRadius={4} backgroundColor={"#0383A2"} borderColor={"coolGray.300"}>
          <Heading color="white" p={3} fontSize={15}>Opsional Outdoor Equipment</Heading>
        </Box>
        <Box  borderBottomWidth={1} borderTopWidth={1} borderColor={"coolGray.300"}>
        <Box borderBottomWidth={1} borderColor={"coolGray.300"} flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading fontSize={13} p={5}>Choose Your Outdoor Equipment</Heading>
          <Pressable onPress={()=> navigation.navigate("Sewa Alat",{ item: params })} borderRadius={3}  backgroundColor="#28AA9B" _pressed={{bg: "#0383A2", borderRadius:'5' }}>
            <Text p={2} fontSize={14} fontWeight="bold" color="white">Rent Here</Text>
          </Pressable>
        </Box>
        <Box mt={1} borderRadius={4} borderColor={"coolGray.300"}>
          <Heading  p={3} fontSize={15}>Order Details</Heading>
        </Box>
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading color={'grey'} fontSize={13} ml={5}>Ticket Destination</Heading>
            <Text color={'grey'} p={2} fontSize={13} fontWeight="bold">{formatCurrency(totalDestination)}</Text>
        </Box>
        <Box  flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading color={'grey'} fontSize={13} ml={5} >Outdoor Equipment</Heading>
            <Text color={'grey'} p={2} fontSize={13} fontWeight="bold">{formatCurrency(totalSewa)}</Text>
        </Box>
        <Box  flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading color={'grey'} fontSize={13} ml={5} >Service Fee</Heading>
          <Text color={'grey'} p={2} fontSize={13} fontWeight="bold">{formatCurrency(serviceFee)}</Text>
        </Box>
        <Box borderTopWidth={1} borderColor={"coolGray.100"} flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading fontSize={13} ml={5} >Total Pembayaran</Heading>
          <Text p={2} fontSize={15} fontWeight="bold">{formatCurrency(totalTicket)}</Text>
        </Box>
      </Box>
      <Pressable mt={2} onPress={() => navigation.navigate("Pembayaran", {totalSewa:totalSewa, totalTicket:totalTicket, serviceFee:serviceFee, totalDestination:totalDestination})} backgroundColor={"#28AA9B"} _pressed={{bg: "#0383A2", borderRadius:'10' }}  borderRadius={10}>
        <Heading alignSelf="center" color="white" p={3} fontSize={15}>Checkout</Heading>        
      </Pressable>
      </ScrollView>
    </>
  );
};



export default DetailOrder;