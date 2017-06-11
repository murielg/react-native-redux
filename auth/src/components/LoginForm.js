import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, Button, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: ''});
    // firebase docs: https://firebase.google.com/docs/auth/web/start
    firebase.auth().signInWithEmailAndPassword(email, password)
    //.then(this.onLoginSucess.bind(this))
      .catch((error) => {
        console.log(error.code, error.message);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.' });
          });
      });
  }

        render() {
          return (
            <Card>
              <CardSection>
                <Input
                  placeholder="email@address.com"
                  label="Email"
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />
              </CardSection>
              <CardSection>
                <Input
                  secureTextEntry
                  placeholder="password"
                  label="Password"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
              </CardSection>
              <Text style={styles.errorTextStyle}>
                {this.state.error}
              </Text>
              <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                  Log in
                </Button>
              </CardSection>
            </Card>
          );
        }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 20, 
    color: 'red'

  }

}; 

export default LoginForm;

