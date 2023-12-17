import React, { useState, useEffect } from 'react';
import { ScrollView } from 'native-base'; // Import ScrollView from NativeBase
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  Image,
} from 'native-base'; 
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import addWisataFunc from '../../src/actions/addwisata';

const AddWisata = () => {
  const [namawisata, setNamawisata] = useState('');
  const [image, setImage] = useState(null);
  const [harga, setHarga] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [kota, setKota] = useState('');
  const [kategori, setKategori] = useState('');
  useEffect(() => {
    // Request permission to access the device's photo library
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert(
          'Sorry, we need camera roll permissions to make this work!'
        );
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      // Launch the image picker
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const handleAddWisata = async () => {
    try {
      // Validate input data (add more validation as needed)
      if (!namawisata || !image || !harga || !deskripsi || !kota || !kategori) {
        alert('Please fill in all fields');
        return;
      }

      const wisataData = {
        namawisata,
        image,
        harga: parseInt(harga, 10), // Convert harga to integer
        deskripsi,
        kota,
        kategori,
      };

      // Add wisata data
      await addWisataFunc(wisataData);

      // Clear input fields after adding data
      setNamawisata('');
      setImage(null);
      setHarga('');
      setDeskripsi('');
      setKota('');
      setDeskripsi('');

      alert('Wisata data added successfully');
    } catch (error) {
      console.error('Error adding wisata data:', error);
    }
  };

  return (
    <ScrollView backgroundColor="white">
      <Box p={7} mb={1} backgroundColor={"lightblue"}>

        <Box  color={"#0383A2"}  alignItems={'center'} textAlign="center" height={100}><Ionicons color={"#0383A2"} name="images-outline" size={49} /></Box>
        
        {/* <Heading color={"#0383A2"} mb={16} size="sm" textAlign="center">
          Make Your Own Destination Here
        </Heading> */}
      </Box>
      <Box p={10} mt={-10} height="full" borderTopRadius={45} backgroundColor="white">
        <Text fontSize={16} mb={2}>
          Nama Wisata
        </Text>
        <Input
          variant="outline"
          value={namawisata}
          onChangeText={(text) => setNamawisata(text)}
          placeholder='Masukkan Nama Destinasi Wisata'
        />
        <Text fontSize={16} mt={2} mb={2}>
          Gambar Wisata
        </Text>
        <Button backgroundColor="#0383A2" onPress={pickImage}>
          <Text fontWeight="bold" color="white">Pilih Gambar</Text>
        </Button>
        {image && (
          <Image
            source={{ uri: image }}
            alt="gambarwisata"
            size="lg"
            resizeMode="cover"
          />
        )}

        <Text fontSize={16} mt={2} mb={2}>
          Harga
        </Text>
        <Input
          variant="outline"
          value={harga}
          onChangeText={(text) => setHarga(text)}
          keyboardType="numeric"
          placeholder='Masukkan Harga Tiket Wisata'
        />

        <Text fontSize={16} mt={2} mb={2}>
          Deskripsi
        </Text>
        <Input
          variant="outline"
          value={deskripsi}
          onChangeText={(text) => setDeskripsi(text)}
          multiline
          placeholder='Masukkan Deskripsi Wisata'
        />

        <Text fontSize={16} mt={2} mb={2}>
          Kota Wisata
        </Text>
        <Input
          variant="outline"
          value={kota}
          onChangeText={(text) => setKota(text)}
          multiline
          placeholder='Masukkan Lokasi Kota Wisata'
        />

        <Text fontSize={16} mt={2} mb={2}>
          Kategori
        </Text>
        <Input
          variant="outline"
          value={kategori}
          onChangeText={(text) => setKategori(text)}
          multiline
          placeholder='Masukkan Kategori Wisata'
        />

        <Button backgroundColor="#0383A2" mt={4} onPress={handleAddWisata} >
          <Text fontWeight="bold" color="white">Add Wisata</Text>
        </Button>
      </Box>
    </ScrollView>
  );
};

export default AddWisata;
