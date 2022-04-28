import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, TextInput, ScrollView, Linking } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import DatePicker from '../components/DatePicker'

const NewEmpScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <KeyboardAvoidingView>
                        <View style={{ alignSelf: 'center', alignContent: 'center', alignItems: 'center', }}>
                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="Name"
                                keyboardType="default"
                            ></TextInput>
                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="Designation"
                                keyboardType="default"
                            ></TextInput>

                            <DatePicker />

                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="City"
                                keyboardType="default"
                            ></TextInput>
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
                                placeholder="Dealer ID"
                                keyboardType="numeric"
                            ></TextInput>
                        </View>
                    </KeyboardAvoidingView>
                    <View style={{ height: 60 }} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    buttonStyle: {
        alignSelf: 'center', alignContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '80%',
        marginTop: 0,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222222',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: '#f03d44',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    buttonTextStyle: {
        color: '#fdfdfd',
        fontWeight: '900',
        fontSize: 20,
    },
    labelTextbox: {
        height: 50,
        width: 300,
        marginTop: 20,
        fontSize: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#a4a4a4',
        padding: 5
    },
});

export default NewEmpScreen;