// Import statements (make sure you have the required dependencies installed)

import React, { useState, useEffect } from 'react';
import { ScrollView } from 'native-base'; // Import ScrollView from NativeBase
import {
  Box,
  Text,
  Input,
  Button,
  Image,
  Select,
  
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import addWisataFunc from '../../src/actions/addwisata';

const AddWisata = () => {
  const [namawisata, setNamawisata] = useState('');
  const [image, setImage] = useState(null);
  const [harga, setHarga] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const cities = ['Lumajang', 'Banyuwangi', 'Malang', 'Batu', 'Mojokerto'];
  const categories = ['Mountain', 'Beach', 'Waterfall', 'Cultural'];

  useEffect(() => {
    // Request permission to access the device's photo library
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
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
      if (!namawisata || !image || !harga || !deskripsi || !selectedCity || !selectedCategory) {
        alert('Please fill in all fields');
        return;
      }
  
      const wisataData = {
        namawisata,
        image,
        harga: parseInt(harga, 10), // Convert harga to integer
        deskripsi,
        kota: selectedCity, // Use selectedCity
        kategori: selectedCategory,
      };
  
      // Add wisata data
      await addWisataFunc(wisataData);
  
      // Clear input fields after adding data
      setNamawisata('');
      setImage(null);
      setHarga('');
      setDeskripsi('');
      setSelectedCity(''); // Clear selectedCity
      setSelectedCategory(''); // Clear selectedCategory
  
      alert('Wisata data added successfully');
    } catch (error) {
      console.error('Error adding wisata data:', error);
    }
  };

  return (
    <ScrollView backgroundColor="white">
      <Box p={7} mb={1} backgroundColor="lightblue">
        <Box color="#0383A2" alignItems="center" textAlign="center" height={100}>
          <Ionicons color="#0383A2" name="images-outline" size={49} />
        </Box>
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
        {/* Use Select component for the city dropdown */}
        <Select
          selectedValue={selectedCity}
          minWidth={200}
          accessibilityLabel="Select City"
          placeholder="Select City"
          onValueChange={(itemValue) => setSelectedCity(itemValue)}
          _selectedItem={{
            bg: 'cyan.600',
            color: 'white',
          }}
        >
          {cities.map((city, index) => (
            <Select.Item key={index} label={city} value={city} />
          ))}
        </Select>

        <Text fontSize={16} mt={2} mb={2}>
          Kategori
        </Text>
        {/* Use Select component for the category dropdown */}
        <Select
          selectedValue={selectedCategory}
          minWidth={200}
          accessibilityLabel="Select Category"
          placeholder="Select Category"
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          _selectedItem={{
            bg: 'cyan.600',
            color: 'white',
          }}
        >
          {categories.map((category, index) => (
            <Select.Item key={index} label={category} value={category} />
          ))}
        </Select>

        <Button backgroundColor="#0383A2" mt={4} onPress={handleAddWisata}>
          <Text fontWeight="bold" color="white">Add Wisata</Text>
        </Button>
      </Box>
    </ScrollView>
  );
};

export default AddWisata;
