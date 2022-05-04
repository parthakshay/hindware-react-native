import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput, ScrollView, } from 'react-native';
import { de } from 'react-native-paper-dates';
import Style from '../components/Style';
const styles = StyleSheet.create(Style)

const ResetPasswordScreen = ({ navigation }) => {
    return (
                        <SafeAreaView>
                                <ScrollView>
                                        <View style={styles.container}>
                                                <View >
                                                        <Text style={styles.login}>Reset Password</Text>
                                                        <Text style={styles.report}>Enter the email address associated with your account and we will send an OTP on it.</Text>
                                                        <View style={{
                                                                alignSelf: 'center', alignContent: 'center',
                                                                alignItems: 'center',}}>
                                                                <TextInput
                                                                        style={styles.labelTextbox}
                                                                        placeholder="Phone Number"
                                                                        keyboardType="number-pad"
                                                                />
                                                        </View>
                                                        <View>                                                  
                                                        <Pressable style={styles.buttonStyle}
                                                         onPress={() => navigation.navigate('PasswordOtp')}>
                                                        <Text style={styles.buttonTextStyle}>Send Code</Text>
                                                        </Pressable>
                                                        </View>
                                                </View>
                                        </View>
                                </ScrollView>
                        </SafeAreaView >

                );

        }



export default ResetPasswordScreen;