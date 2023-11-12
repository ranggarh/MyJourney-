import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Berita from "./screens/berita";
import Home from "./screens/home";
import Profile from "./screens/profile";

import NewsDetail from "./screens/news-detail";
import Favorit from "./screens/favorit";
import DetailOrder from "./screens/detail-order";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
                color="white" ;
              break;
            case "Favorit":
              iconName = "heart";
              color="white" ;
              break;
            case "Berita":
              iconName = "newspaper-outline";
              color="white" ;
              break;
            case "Profile":
              iconName = "person-circle";
              color="white" ;
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "lightblue" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          backgroundColor:"#28AA9B",
          height: 70,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Favorit" component={Favorit} options={noHead} />
      <Tab.Screen name="Berita" component={Berita} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen
            name="News Detail"
            component={NewsDetail}
            options={noHead}
          />
          <Stack.Screen
            name="DetailOrder"
            component={DetailOrder}
            options={noHead}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
