import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, TextInput, ScrollView, Linking } from 'react-native';

export default class LoginScreen extends Component {
        constructor() {
                super();
                this.state = {
                        username: '',
                        usernameValidate: true,
                        password: '',
                        passwordValidate: true,
                }
        }
        validate(text, type) {
                if (type == 'username') {
                        const alph = /^[a-zA-Z]+$/
                        if (alph.test(text)) {
                                this.setState({
                                        usernameValidate: true,
                                })
                        }
                        else {
                                this.setState({
                                        usernameValidate: false,
                                })
                        }
                }
                else if (type == 'password') {
                        const alpha = /^[a-zA-Z]+[0-9]$/
                        if (alpha.test(text)) {
                                this.setState({
                                        passwordValidate: true,
                                })
                        }
                        else {
                                this.setState({
                                        passwordValidate: false,
                                })
                        }
                }
        }

        render() {
                return (
                        <SafeAreaView>
                                <ScrollView>
                                        <View style={styles.container}>
                                                <Image
                                                        source={require("../assets/logo.png")}
                                                        resizeMode="contain"
                                                        style={styles.image}
                                                ></Image>
                                                <View >
                                                        <Text style={styles.login}>Login{'\n'}</Text>
                                                        <Text style={styles.loremIpsum}>
                                                                Welcome back,{"\n"}Sign in to continue Hindware
                                                        </Text>
                                                        <View style={{
                                                                alignSelf: 'center', alignContent: 'center',
                                                                alignItems: 'center',
                                                        }}>
                                                                <TextInput
                                                                        style={[styles.labelTextbox, !this.state.usernameValidate ? styles.error : null]}
                                                                        placeholder="Username"
                                                                        keyboardType="default"
                                                                        onChangeText={(text) => this.validate(text, 'username')}
                                                                />
                                                                <TextInput
                                                                        secureTextEntry={true}
                                                                        style={[styles.labelTextbox, !this.state.usernameValidate ? styles.error : null]} returnKeyType='go'
                                                                        autoCorrect={false}
                                                                        placeholder="Password"
                                                                        keyboardType="default"
                                                                        onChangeText={(text) => this.validate(text, 'password')}
                                                                />
                                                        </View>
                                                        <Text style={{
                                                                color: '#51a4ff',
                                                                fontSize: 15, fontWeight: '900', flex: 1, alignSelf: 'flex-end', marginRight: 30
                                                        }}
                                                                onPress={() => Linking.openURL('http://google.com')}>
                                                                Forgot password?
                                                        </Text>


                                                        <View>
                                                                <Pressable
                                                                        style={styles.buttonStyle}
                                                                        onPress={() => navigation.navigate('Home')}>
                                                                        <Text style={styles.buttonTextStyle}>Sign In</Text>
                                                                </Pressable>
                                                        </View>
                                                </View>
                                        </View>
                                </ScrollView>
                        </SafeAreaView >

                );

        }

}
const styles = StyleSheet.create({
        container: {
                flex: 1
        },
        image: {
                width: 177,
                height: 60,
                marginTop: 70,
                marginLeft: 30
        },
        login: {
                color: "#121212",
                fontSize: 30,
                marginTop: 55,
                marginLeft: 30,
                fontWeight: '800',
        },
        loremIpsum: {
                color: '#b5b5b5',
                fontSize: 20,
                marginLeft: 30,
                fontWeight: '900',
                marginBottom: 20

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
        buttonTextStyle: {
                color: '#fdfdfd',
                fontWeight: '900',
                fontSize: 20,
        },
        labelTextbox: {
                height: 50,
                width: 314,
                marginTop: 30,
                fontSize: 19
        },
        inputLayout: {
                paddingBottom: 20,
        },
        textDanger: {
                color: "#dc3545"
        },
        error: {
                borderWidth: 3,
                borderColor: 'red',
        },
});

