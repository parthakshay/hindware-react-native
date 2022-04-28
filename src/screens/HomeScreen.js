import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Image style={styles.tinyLogo} source={require('../assets/logo.png')} />
      <Text style={styles.title}>Home Screen</Text>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('NewEmp')}>
        <Text style={styles.buttonTextStyle}>Go To Report Screen</Text>
      </Pressable>

    </View>

  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
  },
  buttonStyle: {
    height: 54,
    width: '80%',
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ababab',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: '#f0ebee',
    fontWeight: '700',
  },
  tinyLogo: {
    width: '100%',
    resizeMode: "contain",
  },
  logo: {
    flex: 2,
    marginTop: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default HomeScreen;