import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView, } from 'react-native';
import { Menu, Searchbar, Divider } from 'react-native-paper';

const SettingsScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View >
                        <Text style={styles.login}>Settings{'\n'}</Text>

                        <View>
                            <Searchbar style={{ marginLeft: 30, marginRight: 30, }} />
                        </View>
                        <View style={{
                            alignSelf: 'center', marginTop: 40,
                        }}>
                            <Menu.Item icon="account" onPress={() => navigation.navigate('Account')} title="Account" />
                            <Divider />
                            <Menu.Item icon="eye-outline" onPress={() => { }} title="Appearance" />
                            <Divider />
                            <Menu.Item icon="lock-outline" onPress={() => { }} title="Security" />
                            <Divider />
                            <Menu.Item icon="headphones" onPress={() => { }} title="Help" />
                            <Divider />
                            <Menu.Item icon="comment-question-outline" onPress={() => { }} title="About" />
                            <Divider />
                        </View>
                        <View>
                            <Pressable
                                style={styles.buttonStyle}
                                onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.buttonTextStyle}>Back</Text>
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
    buttonStyle: {
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
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    buttonTextStyle: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 20,
    },
});

export default SettingsScreen;