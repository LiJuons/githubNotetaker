import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import Separator from './Helpers/Separator';
import Badge from './Badge';
import Web from './Helpers/WebView';

class Repositories extends Component {

  openPage = (url) => {
    this.props.navigator.push({
      component: Web,
      title: 'Web View',
      passProps: {url}
    })
  }

  render() {
    const { repos, userInfo } = this.props;
    const list = repos.map((item, index) => {
      const desc = item.description ? <Text style={styles.description}> {item.description} </Text> : <View />; //in guide instead of item. used repos[index].
      return (
        <View key={item.id}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage(item.html_url)}
              underlayColor='transparent'
            >
              <Text style={styles.name}>{item.name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {item.stargazers_count} </Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
    });

    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={userInfo} />
        {list}
      </ScrollView>
    );
  }
}


// Badge.PropTypes = {
//   userInfo: React.PropTypes.object.isRequired,
//   repos: React.PropTypes.array.isRequired
// };

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
      color: '#48BBEC',
      fontSize: 14,
      paddingBottom: 5
    },
    description: {
      fontSize: 14,
      paddingBottom: 5
    }
});

export default Repositories;
