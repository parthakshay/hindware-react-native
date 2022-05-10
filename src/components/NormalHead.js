import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Style from '../components/Style';
import {StyleSheet, View} from 'react-native';
const styles = StyleSheet.create(Style)

const Headbar = ({navigation}) => {
  const _goBack = () => navigation.navigate('Settings');

  return (
    <Appbar.Header style={styles.headbar} />
  );
};

export default Headbar;