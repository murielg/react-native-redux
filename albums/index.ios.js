// Index.ios.js 
// iOS code goes here

import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
    </View>  
  );
};

AppRegistry.registerComponent('albums', () => App);
