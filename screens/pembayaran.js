import { Heading, Text, Box, Image, ScrollView, Pressable, Center } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from 'react';
import { Select } from "native-base";
import { FormControl, CheckIcon} from "native-base";

const Pembayaran = ({}) => {
//   const params = route.params.item;
//   const navigation = useNavigation();
//   const [ticketCount, setTicketCount] = useState(1);

//   const totalPayment = route.params.totalPayment ||0;
//   const serviceFee = 5000;
//   const hargaSewa = params.hargaSewa;
//   const hargaTiket = params.hargaTiket;

//   const incrementTicket = () => {
//     setTicketCount(ticketCount + 1);
//   };

//   const decrementTicket = () => {
//     if (ticketCount > 1) {
//       setTicketCount(ticketCount - 1);
//     }
//   };

  const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };
  const [service, setService] = React.useState("");

  return (
    <>
      <Header title={"Konfirmasi Pembayaran"} withBack="true" />
      
      <ScrollView p={4}>
      <Box borderRadius={4} marginBottom={5} shadow={2} p={5} bgColor="#d4d4d4">
        <Heading color="#737373" p={3} fontSize={15}>Detail Pesanan</Heading>
        
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text color={'#737373'} fontSize={14} ml={5}>Ticket Destination</Text>
            <Text color={'#737373'} fontSize={13} mr={4}>{formatCurrency(10000)}
            </Text>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text color={'#737373'} fontSize={14} ml={5}>Outdoor Equipment</Text>
            <Text color={'#737373'} fontSize={13} mr={4}>{formatCurrency(10000)}
            </Text>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text color={'#737373'} fontSize={14} ml={5}>Transaction Fee (5.0%)</Text>
            <Text color={'#737373'} fontSize={13} mr={4}>{formatCurrency(10000)}
            </Text>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginY={2}>
            <Heading color={'#737373'} fontSize={14} ml={5}>Total Payout</Heading>
            <Text color={'#737373'} fontSize={13} fontWeight="bold" mr={4}>{formatCurrency(10000)}
            </Text>
        </Box>
      </Box>

      <Box borderRadius={4}>
            <Box>
                <Select color="#737373" selectedValue={service} minWidth="200" 
                accessibilityLabel="Payment Method" placeholder="Payment Method" placeholderTextColor="#737373" fontWeight="bold" fontSize={15}
                onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="Ejourney" value="Ejourney"/>
                    <Select.Item label="Cash" value="Cash"/>
                </Select>
            </Box>
      </Box>
      
      </ScrollView>
      <Pressable mx={4} my={4} onPress={() => navigation.navigate("Favorit")} backgroundColor={"#28AA9B"} _pressed={{bg: "#0383A2", borderRadius:'4' }}  borderRadius={10}>
        <Heading alignSelf="center" color="white" p={3} fontSize={15}>Checkout</Heading>        
      </Pressable>
    </>
  );
};



export default Pembayaran;