import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAmmsDIJ5cn_qsIdnFGOctQxeGb8U0FoLk',
      authDomain: 'authentication-6bfeb.firebaseapp.com',
      databaseURL: 'https://authentication-6bfeb.firebaseio.com',
      storageBucket: 'authentication-6bfeb.appspot.com',
      messagingSenderId: '181585767822',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
