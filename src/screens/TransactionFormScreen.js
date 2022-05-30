import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput, ScrollView, } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import TransactionDate from '../components/TransactionDate';
import Style from '../components/Style';
import TransactionHeader from '../components/TransactionHeader';
import colors from '../theme/colors';

const TransactionForm = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView>
                    <View style={styles.container}>
                        <View><TransactionHeader /></View>
                        <View style={{ alignSelf: 'center', alignContent: 'center', alignItems: 'center', }}>
                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="Product ID"
                                keyboardType="default"
                            ></TextInput>

                            <TransactionDate />

                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="Dealer ID"
                                keyboardType="alphanumeric"
                            ></TextInput>
                            <TextInput
                                style={styles.labelTextbox}
                                placeholder="Amount"
                                keyboardType="numeric"
                            ></TextInput>

                        </View>

                        <View style={{ height: 60 }} />
                        <View>
                            <Pressable
                                style={styles.buttonStyle}
                                onPress={() => navigation.navigate('Employee')}>
                                <Text style={styles.buttonTextStyle}>Submit</Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView >

    );
}
const styles = StyleSheet.create(Style)


export default TransactionForm;