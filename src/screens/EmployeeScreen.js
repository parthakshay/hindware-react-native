import React from "react";
import { View, SafeAreaView, Pressable, StyleSheet, Text } from 'react-native';
import { Divider } from "react-native-paper";
import ReportDate from '../components/ReportDate';
import { ScrollView } from "react-native";
import GetDate from "../components/GetDate";
import Style from '../components/Style';
const styles = StyleSheet.create(Style)

const EmployeeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.login}> Details </Text>
                    </View>
                    <View style={{ alignSelf: 'center', alignContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text>Rohit Reddy</Text>
                        <Divider />
                        <Text>Zonal Manager</Text>
                        <Divider />
                        <Text><ReportDate /></Text>
                        <Divider />
                        <Text>Andhra Pradesh</Text>
                        <Divider />
                        <Text><GetDate /></Text>
                    </View>
                    <View style={{ backgroundColor: '#f3f3f3' }}>
                        <View>
                            <View>
                                <Text>ASM</Text>
                            </View>
                        </View>
                        <Pressable
                            style={styles.buttonStyle}
                            onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.buttonTextStyle}>Sign In</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};


export default EmployeeScreen;