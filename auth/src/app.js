import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { FB_API, FB_DOMAIN, FB_DB, FB_ID, FB_SB, FB_MSID } from 'react-native-dotenv';
import { Header } from './components/common';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: FB_API,
      authDomain: FB_DOMAIN,
      databaseURL: FB_DB,
      projectId: FB_ID,
      storageBucket: FB_SB,
      messagingSenderId: FB_MSID
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>App</Text>
      </View>
    );
  }
}
export default App;
