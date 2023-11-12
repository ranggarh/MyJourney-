import { NativeBaseProvider } from "native-base";
import React from "react";
import { Profile, SewaAlat, EditProfile } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <>
          <NavigationContainer>
            <NativeBaseProvider>
              <Stack.Navigator>
                <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
                <Stack.Screen name="Edit Profile" component={EditProfile} options={{headerShown: false}} />
                <Stack.Screen name="Sewa Alat" component={SewaAlat} options={{headerShown: false}} />
              </Stack.Navigator>
            </NativeBaseProvider>
          </NavigationContainer>
        </>

    );
};

export default App;