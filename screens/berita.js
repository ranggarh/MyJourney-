import { Heading, Image, Text, FlatList, Pressable, Box, Input, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import datas from "../datas";

const Berita = () => {
  const navigation = useNavigation();

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
          <Box flex={1} mr={"4"}>
            <Image
              source={{ uri: item.image }}
              w="500"
              h="40"
              borderRadius={10}
              alt="Image Data"
            />
          </Box>
          <Box flex={1}>
            <Text fontSize={"sm"}>{item.date}</Text>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.title}
            </Heading>
          </Box>
        </Box>
      </Pressable>
    );
  };

  return (
    <>
      
      <Header title={"Berita Terkini"} />
      <Box p={4}>
      <Input
      size="xl"
      w="full"
      placeholder="Search for Article"
      borderRadius={10}
      borderColor="muted.400"
      InputLeftElement={
        <Icon
          as={<Ionicons name="search" />}
          size={5}
          ml={4}
          color="muted.500"
        />
      }
    />
    </Box>
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Berita;
