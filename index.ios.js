import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  AsyncStorage
} from 'react-native';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './screens';
import FireDB from './firedb/firedb'
FireDB.initialise();
registerScreens();

const email = AsyncStorage.getItem("email");
var screen = "";
if (email !== null) {
  screen = "MovieSearch"
} else screen = "Login";

// this will start our app
Navigation.startSingleScreenApp({
  screen: {
    screen: screen,
    title: 'Movies',
    passProps: {
      navigatorButtons: {
        leftButtons: [{
          icon: require('./img/navicon_menu.png'),
          id: 'menu'
        }],
        rightButtons: [
          {
            title: 'Edit',
            id: 'edit'
          },
          {
            icon: require('./img/navicon_add.png'),
            id: 'add'
          }
        ]
      },
      navigatorStyle: {
        drawUnderTabBar: true
      }
    },
    navigatorStyle: {
      navBarBackgroundColor: '#4dbce9',
      navBarTextColor: '#ffff00',
      navBarSubtitleTextColor: '#ff0000',
      navBarButtonColor: '#ffffff',
      statusBarTextColorScheme: 'light'
    }
  },
  drawer: {
    left: {
      screen: 'example.SideMenu'
    }
  }
  // tabsStyle: {
  //   tabBarButtonColor: '#ffff00',
  //   tabBarSelectedButtonColor: '#ff9900',
  //   tabBarBackgroundColor: '#551A8B'
  // },
});