import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TrackPlayer from 'react-native-track-player';

const PlayerCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'radioStream1',
      url: 'https://radyo1.radyo-dinle.tc/8076/stream',
      title: 'Radyo Yayını',
      artist: 'Radyo İstasyonu',
    });
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={togglePlayback}>
        <Ionicons name={isPlaying? 'pause-circle-outline': "play-circle-outline"} size={55} color="white" />
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