import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const styles = {
  leftPanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    padding: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  grayColor: {
    color: 'gray'
  },
  blackColor: {
    color: 'black'
  }
};

const LeftPanel = () => {
  const menuItems = [
    {name: 'Facebook', icon: 'logo-facebook'},
    {name: 'Twitter', icon: 'logo-twitter'},
    {name: 'Instagram', icon: 'logo-instagram'}
    // Add more items here
  ];

  return (
    <View style={styles.leftPanel}>
      <TouchableOpacity style={styles.item}>
        <Entypo name="folder-music" size={24} style={[styles.icon, styles.blackColor]} />
        <Text style={styles.grayColor}>İstek Yap</Text>
      </TouchableOpacity>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <Ionicons name={item.icon} size={24} style={[styles.icon, styles.blackColor]} />
          <Text style={styles.grayColor}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LeftPanel;
