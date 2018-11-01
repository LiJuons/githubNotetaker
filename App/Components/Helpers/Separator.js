import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';

class Separator extends Component {
  render() {
    return (
      <View style={styles.separator} />
    );
  }
}

const styles = StyleSheet.create({
    separator: {
        flex: 1,
        backgroundColor: '#E4E4E4',
        height: 1,
        marginLeft: 15
    }
});

export default Separator;
