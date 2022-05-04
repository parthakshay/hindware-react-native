import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, TextInput, ScrollView, } from 'react-native';
import Style from '../components/Style';
const styles = StyleSheet.create(Style)


const ReportScreen = ({ route, navigation }) => {
        return (
                <SafeAreaView>
                        <ScrollView>
                                <View style={styles.container}>
                                        <View>
                                                <Pressable
                                                        style={styles.buttonStyle}
                                                        onPress={() => navigation.navigate('NewEmp')}>
                                                        <Text style={styles.buttonTextStyle}>Submit</Text>
                                                </Pressable>
                                        </View>
                                </View>
                        </ScrollView>
                </SafeAreaView>

        );
}



export default ReportScreen;