import React, { Component } from 'react';
// import { TextInput } from 'react-native';

import { Card, CardSection, Button, Input } from './common';

export default class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value, name) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="you@domain.com"
            value={email}
            onChangeText={value => this.handleInputChange(value, 'email')}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            value={password}
            onChangeText={value => this.handleInputChange(value, 'password')}
            passwordInput
          />
        </CardSection>
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}
