import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {YellowBox} from 'react-native';

/**
 * skip warning message
 * ref: https://stackoverflow.com/questions/49258598/react-native-lifecycle-methods-warning-componentwillreceiveprops-is-deprecate
 */
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

const tabs = [
  {
    tabPage: 'Chats',
    tabName: 'Chats',
    icon: 'comment',
    selectedIcon: 'comment',
  },
  {
    tabPage: 'Contacts',
    tabName: 'Contacts',
    icon: 'address-card',
    selectedIcon: 'address-card',
  },
  {
    tabPage: 'Github',
    tabName: 'Github',
    icon: 'github',
    selectedIcon: 'github',
  },
  {
    tabPage: 'Me',
    tabName: 'Me',
    icon: 'user',
    selectedIcon: 'user',
  },
];

export default class Tab extends Component {
  state = {
    selectedTab: 'Chats',
  };
  render() {
    let tabViews = tabs.map((tab, i) => {
      return (
        <TabNavigator.Item
          title={tab.tabName}
          selected={this.state.selectedTab === tab.tabPage}
          titleStyle={{color: '#696969'}}
          selectedTitleStyle={{color: '#3598DB'}}
          renderIcon={() => <Icon name={tab.icon} size={22} color="#696969" />}
          renderSelectedIcon={() => (
            <Icon name={tab.selectedIcon} size={22} color="#3598DB" />
          )}
          onPress={() => this.setState({selectedTab: tab.tabPage})}>
          <View style={styles.container}>
            <Text style={styles.welcome}>{tab.tabPage}</Text>
          </View>
        </TabNavigator.Item>
      );
    });

    return <TabNavigator style={styles.container}>{tabViews}</TabNavigator>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
