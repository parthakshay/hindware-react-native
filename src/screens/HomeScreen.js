import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import Style from '../components/Style';
import EmpDataTable from '../components/EmpDataTable'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screenContainer}>
          <View>
            <Image style={styles.tinyLogo} source={require('../assets/logo.png')} />
            <Text style={styles.title}>Home Screen</Text>
          </View>
          <View style={{height: 100, width:'80%'}}>
            <EmpDataTable/>
          </View>
          <View style={styles.plusButton}>
            <Pressable
              style={styles.plusButtonStyle}
              onPress={() => navigation.navigate("TransactionForm")}>
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