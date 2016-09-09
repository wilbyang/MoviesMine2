'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} = ReactNative;
import Icon from 'react-native-vector-icons/FontAwesome';
export default class SidemenuItem extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon name={this.props.iconName} size={this.props.iconSize} color={this.props.iconColor} style={{}}/>
        <TouchableOpacity onPress={ this.props.onPress}>
          <Text style={styles.button}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  button: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    marginLeft: 13
  },
  container: {
    flexDirection: 'row'
  }
});