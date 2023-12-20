import React, { useEffect, useState } from 'react';
import { Box, Text, Pressable, HStack, Heading, FlatList, Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { fetchDataFromFirebase, fetchUserSaldoFromFirebase } from '../src/actions/fetchSaldo.js';
import data_topup from '../data_topup';


const TopUp = ({ route }) => {
  const navigation = useNavigation();
  const [userSaldo, setUserSaldo] = useState(0);

  const formatCurrency = (value) => {
    const numericValue = Number(value);
    return numericValue.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  const { topUpAmount } = route.params || { topUpAmount: 0 };

  useEffect(() => {
    const fetchUserSaldo = async () => {
      try {
        const saldo = await fetchUserSaldoFromFirebase();
        setUserSaldo(saldo);
      } catch (error) {
        console.error('Failed to fetch user saldo:', error);
      }
    };

    fetchUserSaldo();
  }, []);
 // The empty dependency array ensures this effect runs only once on component mount

  const renderItem = ({ item }) => {
    return (
      <Box mb={5} ml={0}>
        <Pressable
          onPress={() => navigation.navigate("KonfirmTopup", { item: item, topUpAmount: topUpAmount })}
          justifyContent={'center'}
          ml={4}
          mr={4}
          h={46}
          borderRadius={20}
          bg={'white'}
        >
          <HStack mr={2} justifyContent={'space-between'} alignItems={'center'}>
            <HStack alignItems={'center'} ml={15}>
              <Image source={item.image} alt="Payment Method" borderRadius={20} size={'30'} />
              <Box flexDirection="column">
                <Text ml={2} fontSize={17} fontWeight="bold">{item.nama}</Text>
              </Box>
            </HStack>
            <Ionicons name="chevron-forward-outline" size={20} />
          </HStack>
        </Pressable>
      </Box>
    );
  };

  return (
    <>
      <Header title={'Top up'} withBack={true} />
      <ImageBackground source={require("../assets/image_back.jpg")} blurRadius={10} style={{ flex: 1, resizeMode: "cover" }}>
        <Box bgColor="white" p={'2'} borderRadius={10} ml={2} mr={2} mt={8} mb={5} alignSelf="center">
          <Box>
            <Text fontWeight="bold" textAlign="center">
              Saldo E-Journey Anda : {formatCurrency(userSaldo)}
            </Text>
            <Text fontWeight="light" textAlign="center">
              Ingin Top Up saldo E-Journey untuk berbelanja?
            </Text>
          </Box>
        </Box>
        <Heading size="sm" mt={5} mb={6} marginLeft={5} color="black">
          Pilih Metode Pembayaran
        </Heading>
        <FlatList
          data={data_topup}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </>
  );
};

export default TopUp;
