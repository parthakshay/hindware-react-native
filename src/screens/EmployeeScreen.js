import React from "react";
import { View, SafeAreaView, StatusBar, Pressable, StyleSheet, Text } from 'react-native';
import { Divider } from "react-native-paper";
import GetDate from '../components/GetDate';
import { ScrollView } from "react-native";

const EmployeeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.login}> Details </Text>
                    </View>
                    <View style={{ alignSelf: 'center', alignContent: 'center', alignItems: 'center', }}>
                        <Text>Rohit Reddy</Text>
                        <Divider />
                        <Text>Zonal Manager</Text>
                        <Divider />
                        <GetDate />
                        <Divider />
                        <Text>Andhra Pradesh</Text>
                        <Divider />
                    </View>
                    <View style={{ backgroundColor: '#f3f3f3' }}>
                        <View>
                            <View>
                                <Text>
                                    ASM
                                </Text>
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
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
    },
    buttonStyle: {
        height: 54,
        width: '80%',
        marginTop: 32,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ababab',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    buttonTextStyle: {
        color: '#f0ebee',
        fontWeight: '700',
    },
    tinyLogo: {
        width: '100%',
        resizeMode: "contain",
    },
    logo: {
        flex: 2,
        marginTop: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    login: {
        color: "#121212",
        fontSize: 30,
        marginTop: 55,
        marginLeft: 30,
        fontWeight: '800',
    },
});

export default EmployeeScreen;