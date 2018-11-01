import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

class Web extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    );
  }
};

Web.PropTypes = {
  url: React.PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6EF',
        flex: 1,
        flexDirection: 'column'
    },
});

export default Web;
