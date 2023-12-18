import React, { useState, useEffect } from 'react';
import { Heading, Image, Text, FlatList, Pressable, Box, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import datas from '../datas';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground } from 'react-native';
import  {fetchDataFromFirebase}  from '../src/actions/fetchwisata.js'; // Sesuaikan path dengan struktur proyek Anda

const Favorit = () => {
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

  const renderitem = ({ item }) => {
    return (
      <Pressable
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Listwisata', { selectedCity: item.kota })}
      >
        <Box p={'4'} borderBottomColor={'white'} borderBottomWidth={1} flexDirection="row" flex={1} >
          <Box flex={1.8} >
            <Heading lineHeight={'md'} fontSize={'md'}>
              <Ionicons size={20} color="#0383A2" name="location-outline"> </Ionicons>
              <Text color="#0383A2" fontSize={20}>{item.kota} <Ionicons size={13} color="#0383A2" name="chevron-forward-outline"></Ionicons></Text>
            </Heading>
          </Box>
        </Box>
      </Pressable>
    );
  };

  return (
    <>
      <Header title={'Favorit'} />
      
      <Heading size="lg" mt={5} marginLeft={5} color="black">
        Top Favorite
      </Heading>
      <Box py={'4'}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {wisataData.slice(0,3).map((item, index) => {
            return (
              <Pressable
                activeOpacity={0.5}
                key={index}
                onPress={() => navigation.navigate('DetailWisata', { item: item })}
              >
                {console.log('Image Berhasil Dimuat')}

                <Box w={'150'} mr={'4'} ml={index == 0 ? '4' : '0'}>
                  <Image source={{ uri: item.imageURL }} w="200" h="150" alt="Image Data" mb={'2'} borderRadius={10} />
                  <Text fontSize={'xs'} color="black" mb={2}>
                    {item.emoji}
                  </Text>
                  <Heading fontSize={'sm'} lineHeight={'xs'} ellipsizeMode="tail" numberOfLines={2} color="black" mb={2}>
                    {item.namawisata}
                  </Heading>
                  <Pressable>
                    <Ionicons size={13} color="#28AA9B" name="location-outline">
                      {' '}
                      {item.kota}{' '}
                    </Ionicons>
                  </Pressable>
                </Box>
              </Pressable>
            );
          })}
        </ScrollView>
      </Box>
      <Heading size="lg" mt={5} mb={4} marginLeft={5} color="black" >
        Location
      </Heading>
      <FlatList data={wisataData} renderItem={renderitem} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} />
      
    </>
  );
};

export default Favorit;
