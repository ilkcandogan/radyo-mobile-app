import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlayerCard = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="play-circle-outline" size={55} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlayerCard;