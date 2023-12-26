import { Heading, Image, Text, FlatList, Pressable, Box, Input, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import datas from "../datas";
import { ImageBackground } from "react-native";
import  {fetchDataFromFirebase}  from '../src/actions/fetchTransaksi.js';
import React, {useState,useEffect} from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const Riwayat = () => {
  const navigation = useNavigation();
  const [transaksi, setTransaksi] = useState([]);
  const [userId, setUserId] = useState(null);

  const auth = getAuth();
  // Create state variables for each item's ticket count

  // Keep track of the total payment
  const fetchData = async () => {
    try {
      if (!userId) {
       
        return;
      }

      const data = await fetchDataFromFirebase(userId);
      setTransaksi(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    fetchData();
  }, [userId]); 

  const formatCurrency = (value) => {
    const numericValue = Number(value);
    return numericValue.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  const renderitem = ({ item }) => {
    return (
      <Pressable
        activeOpacity={0.5}
        onPress={() => navigation.navigate("News Detail", { item: item })}
      >
        <Box
          p={"4"}
          borderBottomColor={"coolGray.300"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
         
        >
          <Box flex={1}>
          <Heading mb={3} lineHeight={"md"} fontSize={"md"}>Riwayat Pembelian Tiket & Sewa Alat</Heading>
          <Box flexDirection={"row"} p={2}  >
                <Image
                    source={{ uri: item.gambarWisata }}
                    alt="Selected Item"
                    w={120}
                    h={100}
                    mr={2}
                    borderRadius={5}
                />
                <Box>
                    <Heading lineHeight={"md"} fontSize={"md"}>
                        Tiket Wisata : {item.namatiket}
                    </Heading>
                    <Text>Jumlah: {item.jumlahtiket} Pcs</Text>
                    <Text>{`Total: ${formatCurrency(item.totalDestination)}`}</Text>
                </Box>
            </Box>
            
            {Array.isArray(item.itemSewa) && item.itemSewa.length > 0 ? (
              item.itemSewa.map((barang, index) => (
                <Box key={index} flexDirection="row" alignItems="center" p={2} >
                  <Image
                    source={{ uri: barang.imageURL }}
                    alt="Selected Item"
                    w={120}
                    h={100}
                    mr={2}
                    borderRadius={5}
                  />
                  <Box>
                    <Heading lineHeight={"md"} fontSize={"md"}>
                      {barang.namaBarang}
                    </Heading>
                    <Text>{`Jumlah: ${barang.jumlah} Pcs`}</Text>
                    <Text>{`Total: ${formatCurrency(barang.total)}`}</Text>
                  </Box>
                </Box>
              ))
            ) : (
              <Text>Tidak ada barang yang di sewa</Text>
            )}
            <Heading mt={3} lineHeight={"md"} fontSize={"md"}>
              Total Pembayaran: {formatCurrency(item.totalPembayaran)}
            </Heading>
          </Box>
        </Box>
      </Pressable>
    );
  };
  
  

  return (
    <>
      
      <Header title={"Riwayat Pembelian"} withBack="true"/>
     
      {transaksi.length === 0 ? (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Belum Ada Transaksi Pembelian.</Text>
      </Box>
    ) : (
      <FlatList
        data={transaksi}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        backgroundColor={"white"}
      />
    )}
      
      
    </>
  );
};

export default Riwayat;