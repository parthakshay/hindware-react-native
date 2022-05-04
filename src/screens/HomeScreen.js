import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import Style from '../components/Style'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screenContainer}>
          <View>
            <Image style={styles.tinyLogo} source={require('../assets/logo.png')} />
            <Text style={styles.title}>Home Screen</Text>
          </View>
          <View>
            <Pressable
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('NewEmp')}>
              <Text style={styles.buttonTextStyle}>Go To Report Screen</Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              style={styles.plusButtonStyle}
              onPress={() => navigation.navigate('TrasactionForm')}>
              <Text style={styles.plusButtonTextStyle}>+</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(Style)

export default HomeScreen;