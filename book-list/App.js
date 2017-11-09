import React, {Component} from 'react';
import {StyleSheet, Text, ListView} from 'react-native';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
    };

    let URL = "http://clickherelabs.com/wp-json/wp/v2/posts?_embed";

    fetch(URL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(response),
        })
      })
      .done();
  }

  renderPostList(item) {
    return (
      <Text>{item.slug}</Text>
    );
  }


  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderPostList}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
