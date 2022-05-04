import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, TextInput, ScrollView, Linking } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import Style from '../components/Style';
const styles = StyleSheet.create(Style)


const PasswordOtpScreen = ({ navigation }) => { {
                return (
                        <SafeAreaView>
                                <ScrollView>
                                        <View style={styles.container}>
                                                <View >
                                                     <View>
                                                     <FontAwesome5Icons name="envelope-open" size={50} color="#dc3545" />
                                                     </View>
                                                        <View style={{
                                                                alignSelf: 'center', alignContent: 'center',
                                                                alignItems: 'center',
                                                        }}>
                                                                <TextInput
                                                                        style={styles.labelTextbox}
                                                                        placeholder="Enter the OTP here..."
                                                                        keyboardType="numeric"
                                                                />
</View>
                                                     <View>                                                  <Pressable
style={styles.buttonStyle}
onPress={() => navigation.navigate('Home')}>
<Text style={styles.buttonTextStyle}>Submit</Text>
                                                                </Pressable>
                                                        </View>
                                                </View>
                                        </View>
                                </ScrollView>
                        </SafeAreaView >

                );

        }

}


export default PasswordOtpScreen;