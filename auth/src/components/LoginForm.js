import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
  
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
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
            text="Login" 
          />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

