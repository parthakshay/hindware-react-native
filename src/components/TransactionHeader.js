import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Style from './Style';
import {StyleSheet, View} from 'react-native';
const styles = StyleSheet.create(Style)

const Headbar = ({navigation}) => {
  const _goBack = () => navigation.navigate('Settings');

  return (
    <Appbar.Header style={styles.headbar}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title='Transactions' onPress={_goBack} />
    </Appbar.Header>
  );
};

export default Headbar;