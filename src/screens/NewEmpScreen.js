import React, {Component} from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, TextInput, ScrollView, Linking } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import DatePicker from '../components/DatePicker';
import HeadBar from '../components/HeadBar';
import Style from '../components/Style';
import colors from '../theme/colors';
const styles = StyleSheet.create(Style)

const NewEmpScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View><HeadBar/></View>
                    <KeyboardAvoidingView>
                    
                        <View style={{ alignSelf: 'center', alignContent: 'center', alignItems: 'center', }}>
                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="Name"
                                keyboardType="default"
                            ></TextInput>
                            
                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="City"
                                keyboardType="default"
                            />
                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="State"
                                keyboardType="default"
                            ></TextInput>
                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="Phone Number"
                                keyboardType="phone-pad"
                            ></TextInput>
                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="Email"
                                keyboardType="email-address"
                            ></TextInput>
                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="Enployee Type"
                                keyboardType="default"
                            ></TextInput>
                            <View>
                                <DatePicker />
                            </View>
                        </View>
                    </KeyboardAvoidingView>

                    <View>
                        <Pressable
                            style={styles.buttonStyle}
                            onPress={() => navigation.navigate('Employee')}>
                            <Text style={styles.buttonTextStyle}>Submit</Text>
                        </Pressable>
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView >

    );
}



export default NewEmpScreen;