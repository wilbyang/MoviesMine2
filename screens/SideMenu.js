import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  AlertIOS
} from 'react-native';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{paddingTop:40, flex: 1, backgroundColor: '#aaaaaa'}}>
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight onPress={ this.onModalPress.bind(this) }>
            <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Donald_Trump_August_19%2C_2015_%28cropped%29.jpg'}}></Image>
          </TouchableHighlight>
        </View>
        <View style={{marginLeft: 30, flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column'}}>

          <Text style={styles.title}>Side Menu</Text>

          <TouchableOpacity onPress={ this.onReplaceTab2Press.bind(this) }>
            <Text style={styles.button}>Replace Tab#2 Root</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ this.onModalPress.bind(this) }>
            <Text style={styles.button}>Show Modal Screen</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
  onReplaceTab2Press() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true
    });
    // push/pop navigator actions affect the navigation stack of the current screen only.
    // since side menu actions are normally directed at sibling tabs, push/pop will
    // not help us. the recommended alternative is to use deep links for this purpose
    this.props.navigator.handleDeepLink({
      link: "tab2/example.PushedScreen"
    });
  }
  onModalPress() {
    this.props.navigator.showModal({
      title: "Modal",
      screen: "example.ModalScreen"
    });
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    borderRadius: 50,
    width: 100
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    fontWeight: '500'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});
