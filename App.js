import React from 'react';
import { YellowBox, TouchableHighlight, Alert, Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import GamePage from './Component/GamePage.js';
import LandingPage from './Component/LandingPage.js';
import EndingPage from './Component/EndingPage.js';
import { StackNavigator } from 'react-navigation';

const RootStack =
  StackNavigator({
    LandingPage: {
      screen: LandingPage,
      name: 'Landing Page',
    },
    GamePage: {
      screen: GamePage,
      name: 'Game Page',
    },
    EndingPage: {
      screen: EndingPage,
      name: 'End Page',
    }
  },
  {initialRouteName: 'GamePage',
   headerMode: 'none'
  }
)

export default class App extends React.Component {
  render() {
    return (
      <View style={ styleAppPage.container } >
        <RootStack />
      </View>
    );
  }
}

const styleAppPage = StyleSheet.create({
  container:{
    flex: 1
  }
});
console.disableYellowBox = true;
