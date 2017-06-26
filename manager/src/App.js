import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { FB_API, FB_DOMAIN, FB_DB, FB_ID, FB_SB, FB_MSID } from 'react-native-dotenv';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
export default App;
