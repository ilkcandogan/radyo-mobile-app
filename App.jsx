import React from 'react';
import { View, TouchableOpacity, Linking, Share, BackHandler } from 'react-native';
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
          headerTitleAlign: 'left',
          headerTitle: "DEMO - İLKCAN DOĞAN",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.hamburgerIcon}>
              <Ionicons name="ios-menu" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.rightButton} onPress={() => Linking.openURL('https://wa.me/905355183212')}>
                <Entypo name="folder-music" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.rightButton} onPress={() => {
                Share.share({
                  message: 'https://play.google.com/store/apps/details?id=com.radyoeski',
                  url: 'https://play.google.com/store/apps/details?id=com.radyoeski',
                  title: 'Radyo Eski'
                })
              }}>
                <Ionicons name="share-social" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => BackHandler.exitApp() } style={styles.rightButton}>
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