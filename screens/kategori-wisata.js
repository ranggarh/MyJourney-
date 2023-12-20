import React, { useState, useEffect } from 'react';
import { Heading, Image, Text, FlatList, Pressable, Box } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/header';
import { fetchDataFromFirebase } from '../src/actions/fetchwisata'; // Import your Firebase data fetching function

const KategoriWisata = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const selectedKategori = route.params?.selectedKategori || 'List Destination';
    const [wisataData, setWisataData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchDataFromFirebase();
          setWisataData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  // Filter data based on the selected city
  
  const filteredData = wisataData.filter(item => item.kategori === selectedKategori);

  // renderitem receives an item from filteredData
  const renderitem = ({ item }) => {
    return (
      <Pressable
        activeOpacity={0.5}
        onPress={() => navigation.navigate('DetailWisata', { item: item })}
      >
        <Box
          backgroundColor="white"
          height={250}
          alignItems="center"
          borderRadius={10}
          elevation={2}
          my={2}
        >
          <Image
            source={{
              uri: item.imageURL, // Adjust the property based on your data structure
            }}
            size={180}
            borderRadius={10}
            alt="Image Data"
          ></Image>

          <Box flex={1.8}>
            <Heading mt={2.5} lineHeight="lg" fontSize="md" textAlign="center">
              {item.namawisata}
            </Heading>
            <Text fontSize="sm" alignSelf="center">
              {item.emoji}
            </Text>
          </Box>
        </Box>
      </Pressable>
    );
  };

  return (
    <>
      {/* Use the selectedCity to dynamically set the title */}
      <Header title={selectedKategori} withBack="true" />
      <FlatList
        data={filteredData}
        renderItem={renderitem}
        keyExtractor={(item) => item.id} // Adjust the property based on your data structure
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        mx={2}
        my={2}
      />
    </>
  );
};

export default KategoriWisata;
