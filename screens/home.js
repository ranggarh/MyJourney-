import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Box, Heading, Image, Text, Icon, HStack, Pressable } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import  {fetchDataFromFirebase}  from '../src/actions/fetchwisata.js';
import { fetchBeritaDataFromFirebase } from '../src/actions/fetchBerita.js';



const Home = () => {
  const navigation = useNavigation();
  const [wisataData, setWisataData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [beritaData, setBeritaData] = useState([]);

  const fetchData = async () => {
    try {
      // Fetch wisata data
      const wisata = await fetchDataFromFirebase();
      setWisataData(wisata);

      // Fetch berita data
      const berita = await fetchBeritaDataFromFirebase(); // Ganti dengan fungsi yang sesuai
      setBeritaData(berita);

      // Extract unique categories
      const uniqueCategories = [...new Set(wisata.map(item => item.kategori))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderBerita = () => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {beritaData.slice(0, 2).map((item, index) => (
          <Pressable
            key={index}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('News Detail', { item: item })}
          >
            <Box   borderWidth={1} borderColor={'coolGray.300'} borderRadius={15}  w={'350'} mr={'4'} ml={index == 0 ? '4' : '0'}>
              <Image source={{ uri: item.imageURL }} w="350" h="150"  mb={'1'} borderTopRadius={15} alignItems={'center'} />
              
              <Heading  mt={2} fontSize={'sm'} ml={2} lineHeight={'xs'} ellipsizeMode="tail" numberOfLines={2} fontWeight={'bold'} mb={2}>
                {item.namaberita}
              </Heading>
              <Box ml={2} mb={4} mt={-1}>
                
              </Box>
            </Box>
          </Pressable>
        ))}
      </ScrollView>
    );
  };

  const categoryImages = {
    Mountain: require('../assets/mountain.png'), 
    Beach: require('../assets/beach.png'),
    Waterfall : require('../assets/waterfall.png')
    
  };

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
                  h={"72"}
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
                  
                  />
                  
                  <Text fontSize={'md'} color="black" mt={2} mb={2} ml={1.5}>
                    ⭐⭐⭐⭐⭐
                  </Text>
                  <Text
                    fontSize={'md'}
                    lineHeight={'xs'}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    borderRadius={20}
                    ml={2}
                    mb={1}
                    mt={-1}
                    fontWeight={"semibold"}
                  >
                    {item.namawisata}
                  </Text>
                  <Box ml={2}>
                    <Ionicons name="location" color="#0383A2" size={14}>
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
            {categories.map((category, index) => (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  onPress={() => navigation.navigate('KategoriWisata', { selectedKategori: category })}
                >
                  <Box
                    w={'40'}
                    h={10}
                    mr={3}
                    ml={4}
                    borderWidth={2}
                    borderColor="coolGray.100"
                    borderRadius={20}
                    p={1}
                    backgroundColor="white"
                    alignItems="center"
                  >
                    <HStack>
                      <Image
                        source={categoryImages[category]}
                        w="7"
                        h="7"
                        borderRadius={20}
                      />
                      
                      <Text fontWeight={"bold"} alignSelf={"center"} fontSize={'sm'} color="black" ml={4} mr={4}>
                        {category}
                      </Text>
                    </HStack>
                  </Box>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Box>
        </Box>
        <Box flexDirection={"row"} mt={4}>
        <Heading size="sm" ml={5} mt={5}>
            Hot News
        </Heading>
        <Pressable onPress={()=> navigation.navigate("Berita")}>
          <Text color="#0383A2" ml={200} mt={5}>See More</Text>
        </Pressable>
        </Box>
        <Box py={'4'} >
          {renderBerita()}
        </Box>
      </ScrollView>

    </>
  );
};

export default Home;
