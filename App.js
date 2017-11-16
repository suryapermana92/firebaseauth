import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase'
import { Header } from './src/components/common'
import LoginForm from './src/components/LoginForm'


class App extends Component {
  componentWillMount() {
   const config = {
      apiKey: 'AIzaSyD-KmpHHn5oaLk5emYRcJ7Icjn7YOBuewc',
      authDomain: 'fir-auth-react-native.firebaseapp.com',
      databaseURL: 'https://fir-auth-react-native.firebaseio.com',
      projectId: 'fir-auth-react-native',
      storageBucket: 'fir-auth-react-native.appspot.com',
      messagingSenderId: '674627475633'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#e4ffd3'}}>
        <Header
        backgroundColor='#adcc99'
        headerText='Firebase' />
          <LoginForm />
      </View>
    );
  }
}

export default App;
