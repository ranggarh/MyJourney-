import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Listwisata from './screens/listwisata';
import NewsDetail from './screens/news-detail';
import DetailWisata from './screens/detailwisata';
import { NativeBaseProvider } from 'native-base';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <Stack.Navigator initialRoute="Listwisata" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Listwisata' component={Listwisata} />
        <Stack.Screen name='DetailWisata' component={DetailWisata} />
        <Stack.Screen name='NewsDetail' component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
    
  );
}

export default App;
