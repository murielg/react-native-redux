import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import Row from './Row';



class GrouperList extends Component {
  constructor() {
    super();
    this.state = {
      groupers: []
    }
  }


  componentWillMount() {

    this.setState ({
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
    });

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
      <Row>row </Row>
    );
  }

  render() {
    return (
      <ListView
        style={styles.containerList}
        dataSource={this.state.dataSource}
        renderRow={this.renderPostList}
      />
    );
  }
}

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    marginTop : 20

  },
});


export default GrouperList;

