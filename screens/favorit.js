import React, { useState, useEffect } from 'react';
import { Heading, Image, Text, FlatList, Pressable, Box, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fetchDataFromFirebase } from '../src/actions/fetchwisata.js';

const Favorit = () => {
  const navigation = useNavigation();
  const [wisataData, setWisataData] = useState([]);
  const [kota, setKota] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetchDataFromFirebase();
      setWisataData(data);
      const uniqueKota = [...new Set(data.map(item => item.kota))];
      setKota(uniqueKota);
    } catch (error) {
      // console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTopFavorite = () => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {wisataData.slice(0, 3).map((item, index) => (
          <Pressable
            key={index}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('DetailWisata', { item: item })}
          >
            <Box borderWidth={1} borderColor={'coolGray.300'} borderRadius={20} w={'160'} mr={'4'} ml={index == 0 ? '4' : '0'}>
              <Image source={{ uri: item.imageURL }} w="200" h="150" mb={'1'} borderTopRadius={15} />
              <Text fontSize={'md'} color="black" mb={2} ml={1.5}>
                ⭐⭐⭐⭐⭐
              </Text>
              <Heading fontSize={'sm'} ml={2} lineHeight={'xs'} ellipsizeMode="tail" numberOfLines={2} fontWeight={'bold'} mb={2}>
                {item.namawisata}
              </Heading>
              <Box ml={2} mb={4} mt={-1}>
                <Ionicons size={13} color="#0383A2" name="location-outline">
                  {' '}
                  {item.kota}
                </Ionicons>
              </Box>
            </Box>
          </Pressable>
        ))}
      </ScrollView>
    );
  };

  const renderitem = (city) => {
    return (
      <Pressable
        key={city}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Listwisata', { selectedCity: city })}
      >
        <Box p={'4'} borderBottomColor={'white'} borderBottomWidth={1} flexDirection="row" flex={1}>
          <Box flex={1.8}>
            <Heading lineHeight={'md'} fontSize={'md'}>
              <Ionicons size={20} color="#0383A2" name="location-outline"> </Ionicons>
              <Text color="#0383A2" fontSize={20}>{city} <Ionicons size={13} color="#0383A2" name="chevron-forward-outline"></Ionicons></Text>
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
        {renderTopFavorite()}
      </Box>
      <Heading size="lg" mt={5} mb={4} marginLeft={5} color="black">
        Location
      </Heading>
      <FlatList data={kota} renderItem={({ item }) => renderitem(item)} keyExtractor={(item) => item} showsVerticalScrollIndicator={false} />
    </>
  );
};

export default Favorit;
