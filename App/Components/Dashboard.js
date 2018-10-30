import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

class Dashboard extends Component {

  makeBackground = (btn) => {
    const obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    if (btn===0) {
      obj.backgroundColor = '#48BBEC';
    }else if (btn===1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }

  goToProfile = () => {
    console.log("Going to profile");
  }

  goToRepos = () => {
    console.log("Going to repos");
  }

  goToNotes = () => {
    console.log("Going to notes");
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />

        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile}
          underlayColor='#88D4F5'
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos}
          underlayColor='#88D4F5'
        >
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes}
          underlayColor='#88D4F5'
        >
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default Dashboard;
