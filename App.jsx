import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from './screens/HomeScreen';
import LeftPanel from './screens/LeftPanel';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <LeftPanel {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.hamburgerIcon}>
              <Ionicons name="ios-menu" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => {} } style={styles.rightButton}>
                <Entypo name="folder-music" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {} } style={styles.rightButton}>
                <Ionicons name="share-social" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {} } style={styles.rightButton}>
                <Ionicons name="power-sharp" size={24} color="white" />
              </TouchableOpacity>
            </View>
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
  rightButton: {
    marginRight: 15
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
