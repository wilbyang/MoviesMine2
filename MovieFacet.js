'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  View,
} = ReactNative;


class MovieFacet extends React.Component {

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#dddddd'}}>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}

module.exports = MovieFacet;