import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount() {
    this.state = {
     dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
     }),
      loaded: false
    };

    fetch('https://itunes.apple.com/search?term=no+doubt&limit=5&entity=album')
    .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.results),
          loaded: true
        });      
      })
      .done();  
  }
  renderAlbums(album) {
    return this.state.albums.map(album => 
      <Text>{album.collectionName}</Text>
    );
  }

  renderAlbum(album){
    return (
      <Text>{album.collectionName}</Text>
    );
  }

  render () {
    return (
      <View style={{flex:1}}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderAlbum}
      />
      </View>
    );

  }
}

export default AlbumList;
