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
      <View>
        <Icon name={this.props.iconName} size={15} color={this.props.iconColor}/>
        <TouchableOpacity onPress={ this.props.onPress}>
          <Text style={styles.button}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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