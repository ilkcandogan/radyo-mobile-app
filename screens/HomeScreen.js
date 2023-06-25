import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PlayerCard from '../components/PlayerCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6'
  },
  image: {
    width: 500,
    height: 500,
    marginTop: -60
  },
  text: {
    fontSize: 20,
    marginTop: -20,
    color: 'red'
  }
});

const HomeScreen = () => {
  return (
    <>
    <View style={styles.container}>
      <Image
        source={require('../logo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>“bir radyodan fazlası”</Text>
    </View>
    <PlayerCard />
    </>
  );
};

export default HomeScreen;
