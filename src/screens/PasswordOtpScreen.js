import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, Alert, ScrollView } from 'react-native';
import Style from '../components/Style';
import HeadBar from '../components/HeadBar';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import colors from '../theme/colors';
const styles = StyleSheet.create(Style)


const PasswordOtpScreen = ({ navigation }) => {
        {
                return (
                        <SafeAreaView>
                                <ScrollView>
                                        <View style={styles.container}>
                                                <View><HeadBar /></View>
                                                <View >

                                                        <TextInput
                                                                style={{
                                                                        margin: 20,
                                                                        borderWidth: 1,
                                                                        padding: 10,
                                                                        borderRadius: 10
                                                                }}
                                                                placeholder='Enter your email address'>

                                                        </TextInput>
                                                        <Text style={{ textAlign: 'center', fontFamily: 'Sans-serif', fontWeight: 'bold' }}>Select your Role Here</Text>

                                                        <View style={{ flexDirection: 'column', marginTop: 30, alignSelf: 'center' }}>
                                                                <BouncyCheckbox
                                                                        style={styles.checkbox}
                                                                        size={25}
                                                                        fillColor="gray"
                                                                        unfillColor="#FFFFFF"
                                                                        text="SIH"
                                                                        textStyle={{ fontWeight: 'bold' }}
                                                                        iconStyle={{ borderColor: "gray" }}
                                                                />
                                                                <BouncyCheckbox
                                                                        style={styles.checkbox}
                                                                        size={25}
                                                                        fillColor="gray"
                                                                        unfillColor="#FFFFFF"
                                                                        text="Zonal Manager"
                                                                        textStyle={{ fontWeight: 'bold' }}
                                                                        iconStyle={{ borderColor: "gray" }}
                                                                />

                                                                <BouncyCheckbox
                                                                        style={styles.checkbox}
                                                                        size={25}
                                                                        fillColor="gray"
                                                                        unfillColor="#FFFFFF"
                                                                        text="ASM"
                                                                        textStyle={{ fontWeight: 'bold' }}
                                                                        iconStyle={{ borderColor: "gray" }}
                                                                />
                                                                <BouncyCheckbox
                                                                        style={styles.checkbox}
                                                                        size={25}
                                                                        fillColor="gray"
                                                                        unfillColor="#FFFFFF"
                                                                        text="Sales Man"
                                                                        textStyle={{ fontWeight: 'bold' }}
                                                                        iconStyle={{ borderColor: "gray" }}
                                                                />
                                                                <Button
                                                                        title="Submit"
                                                                        onPress={() => Alert.alert('!success')}
                                                                />

                                                        </View>



                                                </View>
                                        </View>
                                </ScrollView>
                        </SafeAreaView >

                );

        }

}


export default PasswordOtpScreen;