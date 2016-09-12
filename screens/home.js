import React, {Component} from 'react';
import {
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './';

export default class Home extends Component {
  constructor(props) {
    super(props);
    registerScreens();
  }

  render() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'MovieSearch',
        title: 'Movies',
        passProps: {
          navigatorButtons: {
            leftButtons: [{
              icon: require('./../img/navicon_menu.png'),
              id: 'menu'
            }],
            rightButtons: [
              {
                title: 'Edit',
                id: 'edit'
              },
              {
                icon: require('./../img/navicon_add.png'),
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
    });
  }
}
