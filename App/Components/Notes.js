import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableHighlight
} from 'react-native';
import api from '../Utils/api';
import Separator from './Helpers/Separator';
import Badge from './Badge';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notesList: this.handleFirebaseItem(this.props.notes),
      note: '',
      error: ''
    }
  }

  handleFirebaseItem = (notes) => {
    const notesArr = Object.keys(notes).map((key,index) => (
        notes[key]
    ));
    return notesArr;
  }

  handleChange = (e) => {
    this.setState({ note: e.nativeEvent.text });
  }

  handleSubmit = () => {
    const { note } = this.state;
    this.setState({ note: '' });
    

    api.addNote(this.props.userInfo.login, note)
      .then((data) => {
        api.getNotes(this.props.userInfo.login)
          .then((data) => {
            this.setState({
              notesList: this.handleFirebaseItem(data)
            });
          });
      }).catch((err) => {
        this.setState({ error: err });
      })
  }

  footer = () => (
    <View style={styles.footerContainer}>
      <TextInput
        style={styles.searchInput}
        value={this.state.note}
        onChange={this.handleChange}
        placeholder="New Note"
      />
      <TouchableHighlight
        style={styles.button}
        onPress={this.handleSubmit}
        underlayColor="#88D4F5"
      ><Text style={styles.buttonText}>
        Submit
      </Text></TouchableHighlight>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyboardDismissMode="on-drag"
          ListHeaderComponent={() => <Badge userInfo={this.props.userInfo} /> }
          data={this.state.notesList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View key={item.key}>
              <View style={styles.rowContainer}>
                <Text>{item}</Text>
              </View>
              <Separator />
            </View>
          )}
        />
        {this.footer()}
      </View>
    );
  }
};

// Notes.PropTypes = {
//   userInfo: React.PropTypes.object.isRequired
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10
  },
  rowContainer: {
    padding: 10
  },
  footerContainer: {
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default Notes;
