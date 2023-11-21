import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Heading, Button } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const Header = ({ title, withBack = false }) => {
  const trueGray900 = "white";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light"  />
      <Box bg={"white"} p={"4"}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
          <HStack space={255} >
            <Button backgroundColor="white">
            <Ionicons name="menu-outline" size={40} ></Ionicons>
            </Button>
            <Button  backgroundColor="white">
            <Ionicons name="notifications" size={40} ></Ionicons>
            </Button>
          </HStack>
              
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </TouchableOpacity>
            )}
            <Heading color={"white"}>{title}</Heading>
          
           
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
