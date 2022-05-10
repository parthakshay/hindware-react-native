import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import Style from '../components/Style';
import HomeHeadBar from '../components/HomeHead';
import colors from '../theme/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <HomeHeadBar/>
          </View>
          <View>
            <Text style={styles.title}>Home Screen</Text>
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