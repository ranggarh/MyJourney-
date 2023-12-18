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
import addBeritaFunc from '../../src/actions/addBerita';

const AddBerita = () => {
  const [namaberita, setNamaberita] = useState('');
  const [image, setImage] = useState(null);
  const [deskripsi, setDeskripsi] = useState('');

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

  const handleAddBerita = async () => {
    try {
      // Validate input data (add more validation as needed)
      if (!namaberita || !image || !deskripsi ) {
        alert('Please fill in all fields');
        return;
      }

      const beritaData = {
        namaberita,
        image,
        deskripsi,
        
      };

      // Add sewa data
      await addBeritaFunc(beritaData);

      // Clear input fields after adding data
      setNamaberita('');
      setImage(null);
      setDeskripsi('');

      alert('Berita Berhasil Ditambahkan');
    } catch (error) {
      console.error('Gagal Menambahkan Data Berita:', error);
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
          Judul Berita
        </Text>
        <Input
          variant="outline"
          value={namaberita}
          onChangeText={(text) => setNamaberita(text)}
          placeholder='Masukkan Nama Berita'
        />
        <Text fontSize={16} mt={2} mb={2}>
          Gambar Berita
        </Text>
        <Button backgroundColor="#0383A2" onPress={pickImage}>
          <Text fontWeight="bold" color="white">Pilih Gambar</Text>
        </Button>
        {image && (
          <Image
            source={{ uri: image }}
            alt="gambarbarang"
            size="lg"
            resizeMode="cover"
          />
        )}

        <Text fontSize={16} mt={2} mb={2}>
          Deskripsi
        </Text>
        <Input
          variant="outline"
          value={deskripsi}
          onChangeText={(text) => setDeskripsi(text)}
          multiline
          placeholder='Masukkan Deskripsi Berita'
        />

        <Button backgroundColor="#0383A2" mt={4} onPress={handleAddBerita} >
          <Text fontWeight="bold" color="white">Add Berita</Text>
        </Button>
      </Box>
    </ScrollView>
  );
};

export default AddBerita;
