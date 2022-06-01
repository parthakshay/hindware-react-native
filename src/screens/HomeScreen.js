import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import Style from '../components/Style';
import HeadBar from '../components/HeadBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import colors from '../theme/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
          <View>
            <HeadBar/>
          </View>
          
          
      <View style={{flexDirection:'column'}}>
        <View style={styles.homePageIcons}>          
        <Text style={styles.title}>Transactions </Text>
            <Pressable
              style={styles.plusButtonStyle}
              onPress={() => navigation.navigate("Transactions")}>
              
              <Text><FontAwesome name="file-invoice-dollar" size={25} color="#fefefe" /></Text>
            </Pressable>
            
            </View>
          
            <View style={styles.homePageIcons}>          
        <Text style={styles.title}>Settings </Text>
            <Pressable
              style={styles.plusButtonStyle}
              onPress={() => navigation.navigate("Settings")}>
              
              <Text><FontAwesome name="cog" size={25} color="#fefefe" /></Text>
            </Pressable>
            
            </View>


            <View style={styles.homePageIcons}>          
            <Text style={styles.title}>Add User</Text>
            <Pressable
              style={styles.plusButtonStyle}
              onPress={() => navigation.navigate("NewEmp")}>
              
              <Text><FontAwesome name="plus" size={25} color="#fefefe" /></Text>
            </Pressable>
            
            </View>

        <View style={styles.homePageIcons}>          
        <Text style={styles.title}>User Data</Text>
            <Pressable
              style={styles.plusButtonStyle}
              onPress={() => navigation.navigate("EmpData")}>
              
              <Text><FontAwesome name="user" size={25} color="#fefefe" /></Text>
            </Pressable>
            
            </View>
        </View>



        <View>
            <Pressable
              style={styles.logOutButton}
              onPress={() => navigation.navigate("Login")}>
              <Text><FontAwesome name="lock" size={25} color="#fefefe" /></Text>
            </Pressable>
        </View>
      

      </ScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(Style)

export default HomeScreen;