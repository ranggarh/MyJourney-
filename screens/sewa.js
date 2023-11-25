import { Heading, Text, Box, Image, ScrollView, Pressable } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from 'react';
import datas from "../datas";

const SewaAlat = ({ route }) => {
  const params = route.params.item;
  const navigation = useNavigation();

  // Create state variables for each item's ticket count
  const [ticketCounts, setTicketCounts] = useState(Array(6).fill(1));

  // Keep track of the total payment
  let totalPayment = 0;

  const incrementTicket = (index) => {
    const newTicketCounts = [...ticketCounts];
    newTicketCounts[index] += 1;
    setTicketCounts(newTicketCounts);
  };

  const decrementTicket = (index) => {
    if (ticketCounts[index] > 0) {
      const newTicketCounts = [...ticketCounts];
      newTicketCounts[index] -= 1;
      setTicketCounts(newTicketCounts);
    }
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  return (
    <>
      <Header title={"Outdoor Equipment"} withBack="true" />
      <ScrollView p={4}>
        <Box borderRadius={4} backgroundColor={"#0383A2"} borderColor={"coolGray.300"}>
          <Heading color="white" p={3} fontSize={15}>Choose Your Outdoor Equipment</Heading>
        </Box>
        {datas.slice(0, 6).map((item, index) => {
          // Calculate the total for each item
          const itemTotal = ticketCounts[index] * item.harga_alat;
          totalPayment += itemTotal;

          return (
            <React.Fragment key={index}>
              <Box p={"4"} borderColor={"coolGray.300"} borderWidth={1} borderRadius={10} flexDirection="row" flex={1}>
                <Box flex={1} mr={4}>
                  <Heading mt={35} fontSize={15} ml={4}>
                    {item.nama_alat}
                  </Heading>
                  <Text mb={1} ml={4}>{item.content}</Text>
                  <Text ml={4} fontWeight="bold" textAlign="left">
                    Price: {formatCurrency(item.harga_alat)}
                  </Text>
                </Box>
                <Box flex={1} mr={4}>
                  <Image
                    ml={1}
                    borderRadius={10}
                    source={{ uri: item.image_sewa }}
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
                  onPress={() => decrementTicket(index)}
                />
                <Text mx="auto">{ticketCounts[index]}</Text>
                <Ionicons
                  style={{ color: "#28AA9B" }}
                  size={20}
                  name="add-circle-outline"
                  onPress={() => incrementTicket(index)}
                />
              </Box>
              <Box flexDirection="row" marginTop={5} marginBottom={5}>
                <Heading fontSize={15} ml={5}>
                  Price
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
      <Pressable onPress={() => navigation.navigate("DetailOrder",{item:params, selectedOutdoorEquipment: { /* add relevant outdoor equipment data here */ }})} backgroundColor={"#28AA9B"} _pressed={{ bg: "#0383A2", borderRadius: '10' }} >
        <Heading alignSelf="center" color="white" p={4} fontSize={15}>Total Payment : {formatCurrency(totalPayment)}</Heading>
      </Pressable>
    </>
  );
};

export default SewaAlat;
