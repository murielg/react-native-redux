import React, {Component } from 'react';
import {View, StyleSheet} from 'react-native';
import GrouperList from './src/GrouperList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GrouperList/>
      </View>
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