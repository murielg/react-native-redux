import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.collectionName}</Text>
      <Image 
        source={{uri: props.album.artworkUrl100}}
        style={styles.thumbnail}
      />
    </View>
  );
};
var styles = StyleSheet.create({
  thumbnail: {
    width: 100,
    height: 100
  }
});

export default AlbumDetail;

