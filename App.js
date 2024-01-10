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
import LoginScreen from "./screens/auth/LoginScreen.js";
import RegisterScreen from "./screens/auth/RegisterScreen.js";
import Berita from "./screens/berita";
import DetailOrder from "./screens/detail-order";
import TopUp from "./screens/top-up.js";
import KonfirmTopup from "./screens/konfirm-topup.js";
import Pembayaran from "./screens/pembayaran.js";
import AddWisata from "./screens/admin/add.js";
import AddBarang from "./screens/admin/addBarang.js";
import AddBerita from "./screens/admin/addBerita.js";
import ProfileAdmin from "./screens/admin/profileAdmin.js";
import KategoriWisata from "./screens/kategori-wisata.js";
import Riwayat from "./screens/riwayat-pembelian.js";
import LandingPage from "./screens/landing_page.js";
import LandingPage2 from "./screens/landing_page2.js";
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
                color="lightblue" ;
              break;
            case "Favorit":
              iconName = "heart";
              color="lightblue" ;
              break;
            case "Berita":
              iconName = "newspaper-outline";
              color="lightblue" ;
              break;
            case "Profile":
              iconName = "person-circle";
              color="lightblue" ;
              break;
            case "AddWisata":
              iconName = "cloud-upload-outline";
              color="lightblue" ;
              break;
            case "AddBarang":
              iconName = "cloud-upload-outline";
              color="lightblue" ;
              break;
              case "AddBerita":
                iconName = "cloud-upload-outline";
                color="lightblue" ;
                break;
          }
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={focused ? "white" : color}
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

const AdminTabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "AddWisata":
              iconName = "planet-outline";
              color="lightblue" ;
              break;
            case "AddBarang":
              iconName = "briefcase-outline";
              color="lightblue" ;
              break;
              case "AddBerita":
                iconName = "earth-outline";
                color="lightblue" ;
                break;
            case "ProfileAdmin":
              iconName = "person-circle";
              color="lightblue" ;
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={focused ? "white" : color}
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
      <Tab.Screen name="AddWisata" component={AddWisata} options={noHead} />
      <Tab.Screen name="AddBarang" component={AddBarang} options={noHead} />
      <Tab.Screen name="AddBerita" component={AddBerita} options={noHead} />
      <Tab.Screen name="ProfileAdmin" component={ProfileAdmin} options={noHead} />
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">    
          <Stack.Screen name="LandingPage" component={LandingPage} options={noHead} />
          <Stack.Screen name="LandingPage2" component={LandingPage2} options={noHead} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={noHead}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={noHead} />
          <Stack.Screen name='Listwisata' component={Listwisata} options={noHead} />
          <Stack.Screen name='KategoriWisata' component={KategoriWisata} options={noHead} />
          <Stack.Screen name='AddWisata' component={AddWisata} options={noHead} />
          <Stack.Screen name='AddBarang' component={AddBarang} options={noHead} />
          <Stack.Screen name='Riwayat' component={Riwayat} options={noHead} />
          <Stack.Screen name='DetailWisata' component={DetailWisata} options={noHead} />
          <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
          <Stack.Screen name="ProfileAdmin" component={ProfileAdmin} options={{headerShown: false}}/>
          <Stack.Screen name="Edit Profile" component={EditProfile} options={{headerShown: false}} />
          <Stack.Screen name="Sewa Alat" component={SewaAlat} options={{headerShown: false}} />
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="AdminTabs" component={AdminTabs} options={noHead} />
          <Stack.Screen name="News Detail" component={NewsDetail} options={noHead}/>
          <Stack.Screen name="DetailOrder" component={DetailOrder} options={noHead}/>
          <Stack.Screen name="TopUp" component={TopUp} options={noHead}/>
          <Stack.Screen name="KonfirmTopup" component={KonfirmTopup} options={noHead}/>
          <Stack.Screen name="Pembayaran" component={Pembayaran} options={noHead}/>
          <Stack.Screen name="Home" component={Home} options={noHead}/>
          <Stack.Screen name="Berita" component={Berita} options={noHead} />
          <Stack.Screen name="AddBerita" component={AddBerita} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;  
