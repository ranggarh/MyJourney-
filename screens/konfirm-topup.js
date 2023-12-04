import React, { useEffect, useRef, useState } from 'react';
import { Box, Text, HStack, ScrollView, Image, Input, Pressable, InputRightElement } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import { ImageBackground } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// ... (previous imports)

const KonfirmTopup = ({ route }) => {
    const { item } = route.params;
    const navigation = useNavigation();
  
    const [topUpAmount, setTopUpAmount] = useState('0');
    // const inputRef = useRef(null);
  
    // useEffect(() => {
    //   inputRef.current && inputRef.current.focus();
    // }, []);
  
    const formatCurrency = (value) => {
        // Ubah nilai ke tipe Number terlebih dahulu
        const numericValue = Number(value);
        return numericValue.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
      };
      
  
    const handleTopUpAmountChange = (value) => {
      const sanitizedValue = value.replace(/[^0-9]/g, '');
      setTopUpAmount(sanitizedValue);
    };
  
    return (
      <>
        <Header title={"Konfirmasi Top up"} withBack={true} />
        <ImageBackground source={require("../assets/image_back.jpg")} blurRadius={10} style={{flex:1, resizeMode:"cover"}}>
          <KeyboardAwareScrollView>
            <Box bg={'white'} p={4} borderRadius={20} mt={3} mb={3} ml={2} mr={2}>
              <HStack mr={2} justifyContent={'space-between'} alignItems={'center'}>
                <HStack alignItems={'center'} ml={15}>
                  <Image source={item.image} alt="Payment Method" borderRadius={20} size={'30'} />
                  <Box flexDirection="column">
                    <Text ml={2} fontSize={17} fontWeight="bold">{item.nama}</Text>
                    <Text ml={2} fontSize={14}>Metode Top Up yang Dipilih</Text>
                  </Box>
                </HStack>
              </HStack>
            </Box>
  
            <Box bg={'white'}>
              <Text p={4} ml={4} mr={4} fontSize={14} borderBottomColor={'coolGray.300'} borderBottomWidth={1}>
                E-Journey Saldo : {formatCurrency(topUpAmount)}
              </Text>
              <Text p={4} ml={4} mr={4} fontSize={17} fontWeight="bold">
                Nominal Top Up
              </Text>
              <HStack mb={50} mr={2} justifyContent={'space-between'} alignItems={'center'}>
                <HStack alignItems={'center'} p={2} ml={6} mr={5}>
                  <Text justifyContent={'space-between'} alignItems={'center'}>Rp. </Text>
                  <Input
                    keyboardType="numeric"
                    fontSize={14}
                    placeholder="0"
                    mr={10}
                    value={topUpAmount}
                    onChangeText={(value) => handleTopUpAmountChange(value)}
                  />
                </HStack>
                <Text>{topUpAmount}</Text>
              </HStack>
            </Box>
          </KeyboardAwareScrollView>
          <Box bg={'white'} flexDirection="row" justifyContent="space-between" p={4}>
            <Text ml={2} fontSize={19} color="#28AA9B" fontWeight="800" mt={2}>{formatCurrency(topUpAmount)}</Text>
            <Pressable onPress={() => navigation.navigate("DetailOrder")}>
              <Box backgroundColor="#28AA9B" padding={3} marginLeft={8} mr={2} borderRadius={8} >
                <Text marginLeft={2} marginRight={2} color="white">Konfirmasi</Text>
              </Box>
            </Pressable>
          </Box>
        </ImageBackground>
      </>
    );
  };
  
  export default KonfirmTopup;
  