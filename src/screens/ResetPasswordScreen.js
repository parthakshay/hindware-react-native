import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput, ScrollView, } from 'react-native';
import Style from '../components/Style';
import ResetHeader from '../components/ResetHeader';
import colors from '../theme/colors';
const styles = StyleSheet.create(Style)

const ResetPasswordScreen = ({ navigation }) => {
    return (
                        <SafeAreaView>
                                <ScrollView>
                                        <View style={styles.container}>
                                        <View><ResetHeader/></View>
                                                
                                                        <View>
                                                        <Text style={styles.reportScreenText}>Enter the email address associated with your account and we will send an OTP on it.</Text>
                                                        </View>
                                                        <View style={{
                                                                alignSelf: 'center', alignContent: 'center',
                                                                alignItems: 'center',}}>
                                                                <TextInput
                                                                        style={styles.labelTextbox}
                                                                        placeholder="Email Address"
                                                                        keyboardType="email-address"
                                                                        autoComplete="true"
                                                                />
                                                        </View>                                                 
                                                        <Pressable style={styles.buttonStyle}
                                                         onPress={() => navigation.navigate('PasswordOtp')}>
                                                        <Text style={styles.buttonTextStyle}>Send Code</Text>
                                                        </Pressable>
                                        </View>
                                </ScrollView>
                        </SafeAreaView >

                );

        }



export default ResetPasswordScreen;