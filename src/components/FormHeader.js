import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Style from './Style';
import {StyleSheet, View} from 'react-native';
const styles = StyleSheet.create(Style)

const Headbar = ({navigation}) => {

  return (
    <Appbar.Header style={styles.headbar}>
      <Appbar.Content title='Employee Data'/>
    </Appbar.Header>
  );
};

export default Headbar;