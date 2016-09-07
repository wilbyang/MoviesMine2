/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule MoviesApp
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  TabBarIOS,
  StyleSheet,
} = ReactNative;

var SearchScreen = require('./SearchScreen');
import Icon from 'react-native-vector-icons/Ionicons';

class MoviesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: "greenTab"};
  }

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="In theater movies"
          selected={this.state.selectedTab === 'greenTab'}
          iconName="ios-home-outline"
          selectedIconName="ios-home"
        >
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Movies',
              component: SearchScreen,
            }}
          />
        </Icon.TabBarItem>

        <TabBarIOS.Item
          title="coming movies"
          selected={this.state.selectedTab === 'redTab'}
          icon={{uri: base64Icon, scale: 3}}
        >
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Movies',
              component: SearchScreen,
            }}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('MoviesApp', () => MoviesApp);

module.exports = MoviesApp;
