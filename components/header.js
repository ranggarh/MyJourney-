import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Heading, Pressable } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, withBack = false }) => {
  const warnaHeaderBerita = "#28AA9B"
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={warnaHeaderBerita} />
      <Box bg={warnaHeaderBerita} p={"4"}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
                {/* <Image
                  source={require("../assets/cnn.png")}
                  w="12"
                  h="12"
                  alt="CNN Logo"
                  mr={"3"}
                /> */}
              </>
            ) : (
              <Pressable
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </Pressable>
            )}
            <Heading color={"white"}>{title}</Heading>
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;