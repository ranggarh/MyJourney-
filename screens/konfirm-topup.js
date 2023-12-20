import React, { useState, useEffect } from 'react';
import { Box, Text, HStack, Button, Image, Input, Pressable, Modal } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from "@react-native-async-storage/async-storage";
import addSaldoFunc from '../src/actions/addSaldo';
import FIREBASE from '../src/config/FIREBASE';

const KonfirmTopup = ({ route }) => {
  const { item, topUpAmount: initialTopUpAmount } = route.params;
  const navigation = useNavigation();

  const [topUpAmount, setTopUpAmount] = useState(initialTopUpAmount);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const formatCurrency = (value) => {
    const numericValue = Number(value);
    return numericValue.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  const handleTopUpAmountChange = (value) => {
    // Hapus karakter selain angka
    const sanitizedValue = value.replace(/[^0-9]/g, '');
  
    // Konversi ke number
    const numericValue = parseInt(sanitizedValue, 10);
  
    // Set state dengan nilai numericValue
    setTopUpAmount(numericValue);
  };

  const handleTopUpConfirmation = async () => {
    try {
      // Get the current user from Firebase Authentication
      const currentUser = FIREBASE.auth().currentUser;

      // Check if a user is signed in
      if (currentUser) {
        // Call addSaldoFunc to update the user's saldo in Firebase
        await addSaldoFunc(topUpAmount);

        // Proceed with the navigation or any other action
        alert('Top up Berhasil');
        navigation.navigate('TopUp', { topUpAmount: topUpAmount });
      } else {
        throw new Error('No user is currently signed in');
      }
    } catch (error) {
      console.error('Failed to update saldo:', error);
    }
  };

  

  return (
    <>
      <Header title={"Konfirmasi Top up"} withBack={true} />
      <ImageBackground source={require("../assets/image_back.jpg")} blurRadius={10} style={{ flex: 1, resizeMode: "cover" }}>
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
              <Text>{formatCurrency(topUpAmount)}</Text>
            </HStack>
          </Box>

        </KeyboardAwareScrollView>

        <Box bg={'white'} flexDirection="row" justifyContent="space-between" p={4}>
          <Text ml={2} fontSize={19} color="#28AA9B" fontWeight="800" mt={2}>{formatCurrency(topUpAmount)}</Text>
          
          <Pressable onPress={toggleModal}>
            <Box backgroundColor="#28AA9B" padding={3} marginLeft={8} mr={2} borderRadius={8} >
              <Text marginLeft={2} marginRight={2} color="white">Konfirmasi</Text>
            </Box>
          </Pressable>
          <Modal isOpen={isModalVisible} onClose={toggleModal} size="md">
            <Modal.Content>
              <Modal.Header>Konfirmasi Top Up</Modal.Header>
              <Modal.Body>
                <Text>Anda yakin ingin melakukan top up sejumlah {formatCurrency(topUpAmount)}?</Text>
              </Modal.Body>
              <Modal.Footer>
                <HStack space={2} alignItems="center">
                  <Button colorScheme="secondary" onPress={toggleModal}>
                    Tidak
                  </Button>
                  <Button onPress={() => {
                    handleTopUpConfirmation();
                    // Add your logic here for handling the confirmation
                    toggleModal();
                    // Proceed with the navigation or any other action
                    alert('Top up Berhasil');
                    navigation.navigate("TopUp", { topUpAmount: topUpAmount });
                    // Assuming you want to navigate to "Pembayaran"
                  }}>
                    Ya
                  </Button>
                </HStack>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Box>
      </ImageBackground>
    </>
  );
};

export default KonfirmTopup;
