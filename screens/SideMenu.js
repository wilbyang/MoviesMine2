import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  StyleSheet,
  AlertIOS,
  Platform
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import SidemenuItem from './../components/SidemenuItem'
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null
    }
  }
  render() {
    return (
      <View style={{paddingTop:40, flex: 1, backgroundColor: 'grey'}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={ this.onModalProfilePress.bind(this) }>
            { this.state.avatarSource === null ?
              <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Donald_Trump_August_19%2C_2015_%28cropped%29.jpg'}}></Image>
              :
              <Image style={styles.avatar} source={this.state.avatarSource} />
            }
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 30, flex:1, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column'}}>

          <Text style={styles.title}>Side Menu</Text>

          <SidemenuItem iconName="film" iconColor="black" iconSize={15} title="Profile" onPress={this.onModalPress.bind(this)} />
          <SidemenuItem iconName="heart" iconColor="black" iconSize={15} title="Bookmark" onPress={this.onModalPress.bind(this)} />
          <SidemenuItem iconName="home" iconColor="black" iconSize={16} title="Home" onPress={this.onModalPress.bind(this)} />



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
  onModalProfilePress() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;

        // You can display the image using either:
        //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        //Or:
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true};
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true};
        }

        this.setState({
          avatarSource: source
        });
      }
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
