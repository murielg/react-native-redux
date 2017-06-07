import React, { Component } from 'react';
import { ListView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = { 
    albums: [],
    searchTerm: 'no+doubt'
  };

  componentWillMount() {
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };

    fetch('https://itunes.apple.com/search?term=no+doubt&limit=10&entity=album')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.results),
          loaded: true
        });      
      })
      .done();  
  }

  renderAlbums(album){
    return (
      <AlbumDetail key={album.collectionId} album={album} />
    );
  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderAlbums}
      />
    );
  }
}

export default AlbumList;
