import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput, ScrollView, } from 'react-native';
import Style from '../components/Style';
import HeadBar from '../components/NormalHead';
import colors from '../theme/colors';
const styles = StyleSheet.create(Style)

const ResetPasswordScreen = ({ navigation }) => {
    return (
                        <SafeAreaView>
                                <ScrollView>
                                        <View style={styles.container}>
                                        <View><HeadBar/></View>
                                                <View >
                                                        <View>
                                                        <Text style={styles.title}>Reset Password</Text>
                                                        </View>
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