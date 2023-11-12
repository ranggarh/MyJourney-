import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Heading, Pressable } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, withBack, withCheck = false }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <Box bg={"white"} p={"4"} elevation={15} shadow={5}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center"  >
            {withBack && (
                <Pressable
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
                >
                <Box mr={"3"}>
                    <Ionicons name="chevron-back-outline" size={32} color="black" />
                </Box>
                </Pressable>
            )}
            <Heading flex={1} textAlign={"center"} color={"black"}>{title}</Heading>
            {withCheck && (
              <Pressable onPress={() => alert("tombol ditekan")}>
                <Box>
                  <Ionicons name="checkmark" size={32} color={"green"} />
                </Box>
              </Pressable>
            )}
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;