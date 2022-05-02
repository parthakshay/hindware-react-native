import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import DataTable from '../components/EmpDataTable'


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
            <DataTable />
          </View>
          <View>
            <Pressable
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('NewEmp')}>
              <Text style={styles.buttonTextStyle}>Go To Report Screen</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: '#000',
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
    width: 150,
    resizeMode: "contain",
  },
});

export default HomeScreen;