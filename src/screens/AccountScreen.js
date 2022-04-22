import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView, } from 'react-native';
import { Menu, Searchbar, } from 'react-native-paper';

const AccountScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View >
                        <Text style={styles.login}>Account{'\n'}</Text>

                        <View>
                            <Searchbar style={styles.input} />
                        </View>
                        <View style={{
                            alignSelf: 'center', marginTop: 40, marginHorizontal: 20, justifyContent: 'space-around'
                        }}>
                            <Menu.Item icon="account" onPress={() => { }} title="Profile" />
                            <Menu.Item icon="headphones" onPress={() => { }} title="Help" />
                            <Menu.Item icon="logout" onPress={() => navigation.navigate('Login')} title="Logout" />
                        </View>
                        <View>
                            <Pressable
                                style={styles.buttonStyle1}
                                onPress={() => navigation.navigate('Settings')}>
                                <Text style={styles.buttonTextStyle1}>Back</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    login: {
        color: "#121212",
        display: 'flex',
        fontWeight: '800',
        alignSelf: 'center',
        marginTop: 50,
        fontSize: 30
    },
    loremIpsum: {
        color: '#b5b5b5',
        fontSize: 20,
        marginLeft: 30,
        fontWeight: '900',
        marginBottom: 20

    },
    buttonStyle1: {
        alignSelf: 'center', alignContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '80%',
        marginTop: 160,
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
    input: {
        height: 40,
        margin: 30,
        borderWidth: 1,
        padding: 15,
    },
    buttonTextStyle1: {
        color: '#fdfdfd',
        fontWeight: '300',
        fontSize: 20,
    },
    buttonStyle: {
        alignSelf: 'center',
        alignContent: 'center',
        height: 40,
        width: 200,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: '#fffd',
        shadowRadius: 5,
        shadowOpacity: 0.9,
        shadowColor: '#555',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    buttonTextStyle: {
        color: '#420069',
        fontWeight: '300',
        fontSize: 20,
    },
});

export default AccountScreen;