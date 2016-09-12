import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SearchScreen from './../SearchScreen';
import MovieScreen from './../MovieScreen';
import SecondTabScreen from './SecondTabScreen';
import ThirdTabScreen from './ThirdTabScreen';
import PushedScreen from './PushedScreen';
import StyledScreen from './StyledScreen';
import ProfileImagePicker from './ProfileImagePicker';
import ModalScreen from './ModalScreen';
import LightBoxScreen from './LightBoxScreen';
import MapScreen from './MapScreen';
import NotificationScreen from './NotificationScreen'
import SideMenu from './SideMenu';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('MovieSearch', () => SearchScreen);
  Navigation.registerComponent('MovieScreen', () => MovieScreen);
  Navigation.registerComponent('MapScreen', () => MapScreen);
  Navigation.registerComponent('ProfileImagePicker', () => ProfileImagePicker);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.ThirdTabScreen', () => ThirdTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
  Navigation.registerComponent('example.StyledScreen', () => StyledScreen);
  Navigation.registerComponent('example.ModalScreen', () => ModalScreen);
  Navigation.registerComponent('example.LightBoxScreen', () => LightBoxScreen);
  Navigation.registerComponent('example.NotificationScreen', () => NotificationScreen);
  Navigation.registerComponent('example.SideMenu', () => SideMenu);
}
