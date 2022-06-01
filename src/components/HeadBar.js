import React, { Component, useState } from 'react';
import { Appbar } from 'react-native-paper';
import Style from '../components/Style';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native';

const styles = StyleSheet.create(Style)

export default class Headbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedin: '',
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('loggedUser').then((value) => {
      this.setState({ signedin: value })
    });

  }
render() {
    const state = this.state;
    ;


  return (
    <Appbar.Header style={styles.headbar}>
      <Text style={{ fontSize: 18, padding: 10, marginTop: 10 }}>Signed in as {this.state.signedin} </Text>
    </Appbar.Header>
  );
};
}
