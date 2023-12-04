import React from 'react';
import { Heading, Image, Text, FlatList, Pressable, Box, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import datas from '../datas';
import Ionicons from '@expo/vector-icons/Ionicons';

const Favorit = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
      <Pressable
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Listwisata', { selectedCity: item.kota })}
      >
        <Box p={'4'} borderBottomColor={'coolGray.300'} borderBottomWidth={1} flexDirection="row" flex={1}>
          <Box flex={1.8}>
            <Heading lineHeight={'md'} fontSize={'md'}>
              <Ionicons size={20} color="#28AA9B" name="location-outline"> </Ionicons>
              <Text color="#28AA9B" fontSize={20}>{item.kota} <Ionicons size={13} color="#28AA9B" name="chevron-forward-outline"></Ionicons></Text>
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
          {datas.slice(0).map((item, index) => {
            return (
              <Pressable
                activeOpacity={0.5}
                key={index}
                onPress={() => navigation.navigate('DetailWisata', { item: item })}
              >
                <Box w={'150'} mr={'4'} ml={index == 0 ? '4' : '0'}>
                  <Image source={{ uri: item.image }} w="200" h="150" alt="Image Data" mb={'2'} borderRadius={10} />
                  <Text fontSize={'xs'} color="black" mb={2}>
                    {item.emoji}
                  </Text>
                  <Heading fontSize={'sm'} lineHeight={'xs'} ellipsizeMode="tail" numberOfLines={2} color="black" mb={2}>
                    {item.title_wisata}
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
      <Heading size="lg" mt={5} mb={5} marginLeft={5} color="black">
        Location
      </Heading>
      <FlatList data={datas} renderItem={renderitem} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} />
    </>
  );
};

export default Favorit;
