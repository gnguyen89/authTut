import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Button, Input, Spinner } from './common';

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ loading: true, error: '' }); // reset error message

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  }

  onLoginFail() {
    this.setState({
      email: '',
      password: '',
      error: 'Authentication failed.',
      loading: false,
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  handleInputChange(value, name) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password, error, loading } = this.state;

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

        <Text style={styles.errorTextStyle}>{error}</Text>

        <CardSection>
          {loading
            ? <Spinner size="small" />
            : <Button onPress={this.onButtonPress}>Log in</Button>
          }
        </CardSection>
      </Card>
    );
  }
}
