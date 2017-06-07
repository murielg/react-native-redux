import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
  const { collectionName, artistName, artworkUrl100, collectionPrice, collectionViewUrl } = album;
  const { 
    thumbnailStyle,
    headerContentStyle, 
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            source={{uri: artworkUrl100}}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{collectionName}</Text>
          <Text>{artistName}</Text>
          <Text>${collectionPrice}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(collectionViewUrl)} text="Buy Album" />
      </CardSection>
    </Card>
  );
};

var styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }, 
  headerTextStyle: {
    fontSize: 18
  },
  thumnailContainerStyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10, 
    marginRight: 10
  },
  thumbnailStyle: {
    width: 100,
    height: 100
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

});

export default AlbumDetail;

