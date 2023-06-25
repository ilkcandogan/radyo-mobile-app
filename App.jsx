import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <Ionicons
              name="ios-add"
              size={24}
              color="white"
              style={{ marginRight: 10 }}
              onPress={() => {
                // İkon butona tıklandığında yapılacak işlemler
              }}
            />
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;