import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TrackPlayer from 'react-native-track-player';
import MusicControl from 'react-native-music-control';

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
      title: 'Radyo Eski',
      artist: 'Bir Radyodan Fazlası',
    });

    MusicControl.enableControl('play', true);
    MusicControl.enableControl('pause', true);
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PAUSED,
      });
    } else {
      await TrackPlayer.play();
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PLAYING,
      });
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