'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} = ReactNative;
import Icon from 'react-native-vector-icons/FontAwesome';
export default class SidemenuItem extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Icon name={this.props.iconName} size={this.props.iconSize} color={this.props.iconColor}/>
        <TouchableOpacity onPress={ this.props.onPress}>
          <Text style={styles.button}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}