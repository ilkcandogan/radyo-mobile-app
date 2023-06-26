import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    {name: 'Haber Oku', icon: 'globe-outline'},
    // Add more items here
  ];

  return (
    <View style={styles.leftPanel}>
      <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('https://wa.me/905355183212')} >
        <Entypo name="folder-music" size={24} style={[styles.icon, styles.blackColor]} />
        <Text style={styles.grayColor}>İstek Parça</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('https://wa.me/905355183212')} >
        <MaterialIcon name="phone" size={24} style={[styles.icon, styles.blackColor]} />
        <Text style={styles.grayColor}>Canlı Yayına Bağlan</Text>
      </TouchableOpacity>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item} onPress={() => Linking.openURL('https://radyoeski.net/')} >
          <Ionicons name={item.icon} size={24} style={[styles.icon, styles.blackColor]} />
          <Text style={styles.grayColor}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LeftPanel;
