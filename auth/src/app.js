import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { FB_API, FB_DOMAIN, FB_DB, FB_ID, FB_SB, FB_MSID } from 'react-native-dotenv';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  
  componentWillMount() {
     const config = {
      apiKey: `${FB_API}`,
      authDomain: `${FB_DOMAIN}`,
      databaseURL: `${FB_DB}`,
      projectId: `${FB_ID}`,
      storageBucket: `${FB_SB}`,
      messagingSenderId: `${FB_MSID}`
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}
export default App;
