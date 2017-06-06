import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };

    fetch('https://itunes.apple.com/search?term=no+doubt&limit=5&entity=album')
    .then((response) => response.json())
      .then((responseData) => {
        //console.log(responseData.results);
        //this.setState({ albums: responseData.results});
        //
        this.setState({dataSource:ds.cloneWithRow(responseData.results)});
      });  
  }
  renderAlbums() {
    return this.state.albums.map(album => 
      <Text>{album.collectionName}</Text>
    );
  }

  render () {
    return (
      <View style={{flex:1}}>
        <ListView
          dataSource={this.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );

  }
}

export default AlbumList;
