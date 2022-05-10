import React from "react";
import { View, SafeAreaView, Pressable, StyleSheet, Text } from 'react-native';
import ReportDate from '../components/ReportDate';
import { ScrollView } from "react-native";
import GetDate from "../components/GetDate";
import Style from '../components/Style';
import HeadBar from '../components/HeadBar';
import colors from '../theme/colors';
const styles = StyleSheet.create(Style)

const EmployeeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                <View><HeadBar/></View>
                    <View>
                        <Text style={styles.title}> Details </Text>
                    </View>
                    <View style={{ alignSelf: 'center', alignContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text>Rohit Reddy</Text>
                        
                        <Text>Zonal Manager</Text>
                        
                        <Text><ReportDate /></Text>
                        
                        <Text>Andhra Pradesh</Text>
                        
                        <Text><GetDate /></Text>
                    </View>
                    <View style={{ backgroundColor: '#fefefe' }}>
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