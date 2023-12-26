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
  const hargaTiket = params.harga;
  const gambarWisata = params.imageURL;
  

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
  const selectedItems = route.params.selectedItems || [];

  return (
    <>
      <Header title={"Detail Pesanan"} withBack="true" />
      
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
              {params.namawisata}
            </Heading>
            <Text mb={1} ml={4}>⭐⭐⭐⭐⭐</Text>
            <Text ml={4}>
              <Ionicons size={13} color="#0383A2" name="location-outline">
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
              source={{ uri: gambarWisata }}
              w={"380"}
              h={"40"}
              alt="Image"
            />
          </Box>
        </Box>
        <Box flexDirection="row" marginTop={5} marginRight={9}>
          <Heading fontSize={15} ml={5}>
            Jumlah Tiket Wisata
          </Heading>
          <Ionicons
            style={{ color: "#0383A2", marginLeft: 80 }}
            size={20}
            name="remove-circle-outline"
            onPress={decrementTicket}
          /> 
          <Text mx="auto" >{ticketCount}</Text>
          <Ionicons
            style={{ color: "#0383A2" }}
            size={20}
            name="add-circle-outline"
            onPress={incrementTicket}
          />
        </Box>
        <Box flexDirection="row" marginTop={5} mb={5}>
          <Heading fontSize={15} ml={5}>
            Harga
          </Heading>
          <Ionicons style={{ color: "#28AA9B", marginLeft: 160 }} size={20}>
           <Heading fontSize={15} mx="auto" > {formatCurrency(ticketCount * hargaTiket)}</Heading>
          </Ionicons>
        </Box>
        {/* test */}
        {/* <Box mt={4} borderRadius={4}  borderColor={"coolGray.300"}>
          <Heading color="black" p={3} fontSize={15}>Opsional Outdoor Equipment</Heading>
        </Box> */}
        <Box  borderBottomWidth={1} borderTopWidth={1} borderColor={"coolGray.300"}>
        <Box borderBottomWidth={1} borderColor={"coolGray.300"} flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading fontSize={13} p={5}>Ingin Menyewa Alat Outdoor Lain?</Heading>
          <Pressable onPress={()=> navigation.navigate("Sewa Alat",{ item: params })} borderRadius={3}  backgroundColor="#0383A2" _pressed={{bg: "#0383A2", borderRadius:'5' }}>
            <Text p={2} fontSize={14} fontWeight="bold" color="white">Pesan Disini</Text>
          </Pressable>
        </Box>
        

        <Box mt={1} borderRadius={4} borderColor={"coolGray.300"}>
          <Heading p={3} fontSize={15}>
            Rincian Sewa Alat
          </Heading>
          {selectedItems.length === 0 ? (
            <Text alignSelf="center" fontSize={14} color="red">
              Tidak ada alat yang disewa.
            </Text>
          ) : (
            // Loop through selected items and display them
            selectedItems.map((item, index) => (
              
              <Box
                key={index}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor={"#0383A2"}
                p={4}
                borderRadius={10}
                mb={4}
              >
              <Box flexDirection={"row"} >
                  <Box>
                    <Image
                      source={{ uri: item.imageURL }}
                      alt="Selected Item"
                      
                      w={120}
                      h={100}
                      p={5}
                      mr={2}
                      borderRadius={10}
                    />
                  </Box>
                  <Box >
                    <Heading color={"white"} fontSize={14} mt={3} ml={3} >
                      {item.namaBarang} 
                    </Heading>
                    <Text color={"white"} fontSize={13} fontWeight="bold" mt={3} ml={3}>
                     Jumlah: {item.jumlah} Pcs
                    </Text>
                    <Text color={"white"} fontSize={13} fontWeight="bold" ml={3}>
                     Total: {formatCurrency(item.total)}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))
          )}
        </Box>

        <Box mt={1} borderBottomWidth={1}  borderColor={"coolGray.300"}>
          <Heading  p={3} fontSize={15}>Rincian Pesanan</Heading>
        </Box>
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading color={'grey'} fontSize={13} ml={5}>Tiket Wisata</Heading>
            <Text color={'grey'} p={2} fontSize={13} fontWeight="bold">{formatCurrency(totalDestination)}</Text>
        </Box>
        <Box  flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading color={'grey'} fontSize={13} ml={5} >Sewa Alat Outdoor</Heading>
            <Text color={'grey'} p={2} fontSize={13} fontWeight="bold">{formatCurrency(totalSewa)}</Text>
        </Box>
        <Box  flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading color={'grey'} fontSize={13} ml={5} >Biaya Layanan</Heading>
          <Text color={'grey'} p={2} fontSize={13} fontWeight="bold">{formatCurrency(serviceFee)}</Text>
        </Box>
        <Box borderTopWidth={1} borderColor={"coolGray.100"} flexDirection="row" justifyContent="space-between" alignItems="center">
          <Heading fontSize={13} ml={5} >Total Pembayaran</Heading>
          <Text p={2} fontSize={15} fontWeight="bold">{formatCurrency(totalTicket)}</Text>
        </Box>
      </Box>
      <Pressable mb={7} mt={2} onPress={() => navigation.navigate("Pembayaran", {totalSewa:totalSewa, totalTicket:totalTicket, serviceFee:serviceFee, totalDestination:totalDestination, selectedItems: selectedItems, namatiket: params.namawisata, // Pass the name of the destination
      jumlahtiket: ticketCount, gambarWisata: gambarWisata,})} backgroundColor={"#0383A2"} _pressed={{bg: "#0383A2", borderRadius:'10' }}  borderRadius={10}>
        <Heading alignSelf="center" color="white"  p={3} fontSize={15}>Checkout</Heading>        
      </Pressable>
      </ScrollView>
    </>
  );
};



export default DetailOrder;