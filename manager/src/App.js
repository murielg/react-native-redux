import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import { FB_API, FB_DOMAIN, FB_DB, FB_ID, FB_SB, FB_MSID } from 'react-native-dotenv';
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
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            App
          </Text>
        </View>
      </Provider>
    );
  }
}
export default App;
