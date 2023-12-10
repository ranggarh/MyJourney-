import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile, SewaAlat, EditProfile } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/home";
import Favorit   from "./screens/favorit";
import NewsDetail from "./screens/news-detail";
import DetailWisata from './screens/detailwisata';
import Listwisata from './screens/listwisata';
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import Berita from "./screens/berita";
import DetailOrder from "./screens/detail-order";
import TopUp from "./screens/top-up.js";
import KonfirmTopup from "./screens/konfirm-topup.js";

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
              size={30}
              color={focused ? "lightblue" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          backgroundColor:"#0383A2",
          height: 70,
          borderTopWidth: 0,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          
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
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={noHead}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={noHead} />
          <Stack.Screen name='Listwisata' component={Listwisata} options={noHead} />
          <Stack.Screen name='DetailWisata' component={DetailWisata} options={noHead} />
          <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
          <Stack.Screen name="Edit Profile" component={EditProfile} options={{headerShown: false}} />
          <Stack.Screen name="Sewa Alat" component={SewaAlat} options={{headerShown: false}} />
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="News Detail" component={NewsDetail} options={noHead}/>
          <Stack.Screen name="DetailOrder" component={DetailOrder} options={noHead}/>
          <Stack.Screen name="TopUp" component={TopUp} options={noHead}/>
          <Stack.Screen name="KonfirmTopup" component={KonfirmTopup} options={noHead}/>
          <Stack.Screen name="Home" component={Home} options={noHead}/>
          <Stack.Screen name="Berita" component={Berita} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;  
