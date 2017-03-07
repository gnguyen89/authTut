import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: null,
    };

    this.renderContent = this.renderContent.bind(this);
  }
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAmmsDIJ5cn_qsIdnFGOctQxeGb8U0FoLk',
      authDomain: 'authentication-6bfeb.firebaseapp.com',
      databaseURL: 'https://authentication-6bfeb.firebaseio.com',
      storageBucket: 'authentication-6bfeb.appspot.com',
      messagingSenderId: '181585767822',
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}
          >
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (<View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}
        >
          <Spinner size="large" />
        </View>);
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
