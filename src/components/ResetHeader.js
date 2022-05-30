import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Style from '../components/Style';
import {StyleSheet, View} from 'react-native';
const styles = StyleSheet.create(Style)

const Headbar = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.headbar}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title='Reset Password' />
    </Appbar.Header>
  );
};

export default Headbar;