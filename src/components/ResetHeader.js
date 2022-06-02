import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Style from '../components/Style';
import {StyleSheet, View} from 'react-native';
const styles = StyleSheet.create(Style)

const Headbar = () => {
  return (
    <Appbar.Header style={styles.headbar}>
      <Appbar.Content title='Reset Password' />
    </Appbar.Header>
  );
};

export default Headbar;