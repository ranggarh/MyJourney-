// Home.js

import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Box, Heading, Image, Text, Icon, HStack } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import  {fetchDataFromFirebase}  from '../src/actions/fetchwisata.js'; // Sesuaikan path dengan struktur proyek Anda

const Home = () => {
  const navigation = useNavigation();
  const [wisataData, setWisataData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetchDataFromFirebase();
      setWisataData(data);
    } catch (error) {
      // console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header title={'Home'} />
      <ScrollView backgroundColor="white">
        <Box  p={5} >
          <Heading mt={6} size="2xl">
            My Journey{' '}
          </Heading>
          <Heading size="sm">Make Your Journey</Heading>
        </Box>
        <Heading size="lg" mt={6} mb={5} marginLeft={5} >All Destination</Heading>
        <Box backgroundColor="white">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} mt={10} mb={2}>
            {wisataData.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                onPress={() => navigation.navigate('DetailWisata', { item: item })}
              >
                <Box
                  w={'48'}
                  h="64"
                  mr={'4'}
                  ml={index == 0 ? '4' : '0'}
                  borderRadius={30}
                  borderColor="coolGray.100"
                  borderWidth={4}
                  mb={30}
                >
                {console.log('Image Berhasil Dimuat')}
                <Image
                    borderTopRadius={25}
                    source={{ uri: item.imageURL }} 
                    w="full"
                    h="4/6"
                    alt="Image Data"
                  />
                  <Text fontSize="md" color="grey" ml={2}>
                   
                  </Text>
                  <Heading
                    fontSize={'md'}
                    lineHeight={'xs'}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    color="grey"
                    borderRadius={20}
                    ml={2}
                    mb={1}
                  >
                    {item.namawisata}
                  </Heading>
                  <Box ml={2}>
                    <Ionicons name="location" color="#28AA9B" size={14}>
                     {item.kota}
                    </Ionicons>
                  </Box>
                </Box>
              </TouchableOpacity>
              
            ))}
          </ScrollView>
          <Box>
            <Heading size="sm" ml={5} mb={5}>
              CATEGORIES
            </Heading>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} mb={5}>
              {wisataData.map((item, index) => (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  onPress={() => navigation.navigate('Listwisata', { item: item })}
                >
                  <Box
                    w={'40'}
                    h={10}
                    mr={3}
                    ml={4}
                    borderWidth={3}
                    borderColor="coolGray.100"
                    borderRadius={20}
                    p={1}
                    backgroundColor="white"
                    alignItems="center"
                  >
                    <HStack>
                      <Image
                        source={{ uri: item.imageURL }}
                        w="7"
                        h="7"
                        alt="CNN Logo"
                        borderRadius={20}
                        
                      />
                      <Text bold fontSize={'sm'} color="black" ml={4} mr={10}>
                        {item.kategori}
                      </Text>
                    </HStack>
                  </Box>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Home;
