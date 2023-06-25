import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import LeftPanel from './screens/LeftPanel';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <LeftPanel {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.hamburgerIcon}>
              <Ionicons name="ios-menu" size={24} color="white" />
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  hamburgerIcon: {
    marginLeft: 15,
  },
  leftPanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
};

export default App;
