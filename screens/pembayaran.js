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
import Ionicons from '@expo/vector-icons/Ionicons';

const Pembayaran = ({ route }) => {
  const totalSewa = route.params.totalSewa || 0;
  const topUpAmount = route.params.topUpAmount || 0;
  const totalDestination = route.params.totalDestination || 0;
  const serviceFee = route.params.serviceFee || 0;
  const totalPembayaran = totalSewa + totalDestination + serviceFee;
  const navigation = useNavigation();

  const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  const [service, setService] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    // Check if the user has confirmed the payment
    if (isConfirmed) {
      // Proceed with the checkout logic
      navigation.navigate('Favorit');
    }
  }, [isConfirmed]);

  return (
    <>
      <Header title={'Konfirmasi Pembayaran'} withBack="true" />

      <ScrollView p={4}>
        <Box borderRadius={4} marginBottom={5} shadow={2} p={5} bgColor="#d4d4d4">
          <Heading p={3} fontSize={15}>Detail Pesanan</Heading>
        
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text fontSize={14} ml={5}>Ticket Destination</Text>
            <Text fontSize={13} mr={4}>{formatCurrency(totalDestination)}
            </Text>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text fontSize={14} ml={5}>Outdoor Equipment</Text>
            <Text fontSize={13} mr={4}>{formatCurrency(totalSewa)}
            </Text>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text fontSize={14} ml={5}>Transaction Fee (5.0%)</Text>
            <Text fontSize={13} mr={4}>{formatCurrency(serviceFee)}
            </Text>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginY={2}>
            <Heading fontSize={14} ml={5}>Total Payout</Heading>
            <Text fontSize={13} fontWeight="bold" mr={4}>{formatCurrency(totalPembayaran)}
            </Text>
        </Box>
        </Box>

        <Box borderRadius={4}>
          <Box>
            <Select
              color="black"
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Payment Method"
              placeholder="Payment Method"
              placeholderTextColor="black"
              fontWeight="bold"
              fontSize={15}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label={`Ejourney : ${formatCurrency(topUpAmount)}`} value="Ejourney" />
              <Select.Item label="Cash" value="Cash" />
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
      >
        <Heading alignSelf="center" color="white" p={3} fontSize={15}>
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
              
              <Button onPress={toggleModal}>No</Button>
              <Button onPress={() => {
                    // Add your logic here for handling the confirmation
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
