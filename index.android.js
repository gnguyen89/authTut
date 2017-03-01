import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src/app';

export default function authTut() {
  return <App />;
}

AppRegistry.registerComponent('authTut', () => authTut);
