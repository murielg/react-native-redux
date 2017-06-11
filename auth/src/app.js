import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { FB_API, FB_DOMAIN, FB_DB, FB_ID, FB_SB, FB_MSID } from 'react-native-dotenv';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null }
  
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true: 
        return(
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        )
      case false:
        return <LoginForm />;

      default:
        return <Spinner size="large" />;

    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}
export default App;
