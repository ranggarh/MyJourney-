import React, { useState, useEffect } from 'react';
import {
  Heading,
  Text,
  Box,
  Image,
  ScrollView,
  Pressable,
  Center,
  Select,
  Modal,
  Button,
} from 'native-base';
import { Header } from '../components';
import { useNavigation } from '@react-navigation/native';
import { fetchUserSaldoFromFirebase } from '../src/actions/fetchSaldo';
import addTransaksi from '../src/actions/addTransaksi';
import { getAuth, onAuthStateChanged } from 'firebase/auth';




const Pembayaran = ({ route }) => {
  const totalSewa = route.params.totalSewa || 0;
  const topUpAmount = route.params.topUpAmount || 0;
  const totalDestination = route.params.totalDestination || 0;
  const serviceFee = route.params.serviceFee || 0;
  const totalPembayaran = totalSewa + totalDestination + serviceFee;
  const itemSewa = route.params.selectedItems || [];
  const namatiket = route.params.namatiket || [];
  const jumlahtiket = route.params.jumlahtiket || 0;
  const gambarWisata = route.params.gambarWisata || [];

  const navigation = useNavigation();

  const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  const [service, setService] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);
  const [userSaldo, setUserSaldo] = useState(0);
  const [userId, setUserId] = useState(null);
  const auth = getAuth();


  useEffect(() => {
    const fetchUserSaldo = async () => {
      try {
        const saldo = await fetchUserSaldoFromFirebase();
        setUserSaldo(saldo);
      } catch (error) {
        console.error('Error fetching user saldo:', error);
      }
    };
  
    fetchUserSaldo();
  }, []);

  
   

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        // User is not logged in, handle accordingly
        setUserId(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  const handlePaymentConfirmation = async () => {
    try {
      // Check if userId is available
      if (!userId) {
        console.error('User ID is null or undefined');
        return;
      }

      // Add transaction details
      const transactionDetails = {
        namatiket,
        jumlahtiket,
        gambarWisata,
        itemSewa,
        totalDestination,
        totalSewa,
        serviceFee,
        totalPembayaran,
        // Add other details you want to store
      };

      // Add transaction to Firebase
      const transactionId = await addTransaksi(userId, transactionDetails);

      // Proceed with the checkout logic
      navigation.navigate('Riwayat');
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };
  

  return (
    <>
      <Header title={'Pembayaran'} withBack="true" />

      <ScrollView p={4}>
        <Box borderRadius={4} marginBottom={5} shadow={2} p={5} bgColor={'#0383A2'} >
          <Heading color={'white'} p={3} fontSize={15}>Detail Pesanan</Heading>
        
        <Box  flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text color={'white'} fontSize={14} ml={5}>Ticket Destination</Text>
            <Text color={'white'} fontSize={13} mr={4}>{formatCurrency(totalDestination)}
            </Text>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text color={'white'} fontSize={14} ml={5}>Outdoor Equipment</Text>
            <Text color={'white'} fontSize={13} mr={4}>{formatCurrency(totalSewa)}
            </Text>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text color={'white'} fontSize={14} ml={5}>Transaction Fee (5.0%)</Text>
            <Text color={'white'} fontSize={13} mr={4}>{formatCurrency(serviceFee)}
            </Text>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginY={2}>
            <Heading color={'white'} fontSize={14} ml={5}>Total Payout</Heading>
            <Text color={'white'} fontSize={13} fontWeight="bold" mr={4}>{formatCurrency(totalPembayaran)}
            </Text>
        </Box>
        </Box>

        <Box borderRadius={4}>
          <Box>
          <Box borderRadius={4}>
          <Box >
            <Select
              color="white"
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Payment Method"
              placeholder="Payment Method"
              placeholderTextColor="white"
              fontWeight="bold"
              fontSize={15}
              onValueChange={(itemValue) => setService(itemValue)}
              bgColor="#0383A2"
              
              
            >
              <Select.Item  label="Cash" value="Cash" />
              {userSaldo >= 0 && (
                <Select.Item
                  label={`Ejourney : ${formatCurrency(userSaldo)}`}
                  value="Ejourney"
                  
                />
              )}
            </Select>
          </Box>
            <Box flexDirection="row">
              <Text mt={1} fontSize={13}>
                Tidak Cukup Saldo?
              </Text>
              <Pressable onPress={() => navigation.navigate('TopUp')}>
                <Text mt={1} fontSize={13} fontWeight="bold" fontStyle={'italic'}>
                  {' '}
                  Top Up Disini
                </Text>
              </Pressable>
            </Box>
          </Box>

          </Box>
        </Box>
      </ScrollView>

      <Pressable
        mx={4}
        my={4}
        onPress={() => {
          // Open the confirmation modal
          toggleModal();
        }}
        backgroundColor="#28AA9B"
        _pressed={{ bg: '#0383A2', borderRadius: '4' }}
        borderRadius={10}
        bgColor={'#0383A2'}
      >
        <Heading alignSelf="center"  p={3} fontSize={15} color={"white"}>
          Checkout
        </Heading>
      </Pressable>

      {/* Confirmation Modal */}
      <Modal isOpen={isModalVisible} onClose={toggleModal} size="md">
        <Modal.Content>
          <Modal.Header>Confirmation</Modal.Header>
          <Modal.Body>
            <Text>Are you sure you want to proceed with the payment?</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              
              <Button colorScheme="danger" onPress={toggleModal}>No</Button>
              <Button onPress={() => {
                    handlePaymentConfirmation();
                    toggleModal();
                    // Proceed with the navigation or any other action
                    alert('Pembayaran Berhasil');
                    navigation.navigate("Tabs");
                    
                    // Assuming you want to navigate to "Pembayaran"
                  }}>Yes</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Pembayaran;
