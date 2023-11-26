import React from 'react';
import { Heading, Image, Text, FlatList, Pressable, Box } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/header';
import datas from '../datas';

const Listwisata = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedCity = route.params?.selectedCity || 'List Destination';

  // renderitem receives an item from datas
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
              uri: item.image,
            }}
            size={180}
            borderRadius={10}
            alt="Image Data"
          ></Image>

          <Box flex={1.8}>
            <Heading mt={2.5} lineHeight="lg" fontSize="md" textAlign="center">
              {item.title_wisata}
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
      <Header title={selectedCity} withBack="true" />
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        mx={2}
        my={2}
      />
    </>
  );
};

export default Listwisata;
