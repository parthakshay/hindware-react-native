import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, TextInput, ScrollView, Linking } from 'react-native';

export default class LoginScreen extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        username: '',
                        password: '',
                }
        }
        validate = () => {
                const { username, password } = this.state
                if (username == 'parth' && password == 'parth@123') {
                        this.props.navigation.navigate('Home')
                        return true
                } else {
                        this.props.navigation.navigate('Login')
                        return false
                }
        }

        making_api_call = () => {
                if (this.validate()) {
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M493.6 163c-24.88-19.62-45.5-35.37-164.3-121.6C312.7 29.21 279.7 0 256.4 0h-.8c-23.3 0-56.3 29.21-73 41.38-118.8 86.25-139.4 101.1-164.3 121.6C6.75 172 0 186 0 200.8V464c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-47.1V200.8c0-14.8-6.7-28.8-18.4-37.8zM303.2 367.5c-14.1 11-30.7 16.5-47.2 16.5s-33.06-5.484-47.16-16.47L64 254.9v-46.4c21.16-16.59 46.48-35.66 156.4-115.5 3.18-2.328 6.891-5.187 10.98-8.353C236.9 80.44 247.8 71.97 256 66.84c8.207 5.131 19.14 13.6 24.61 17.84 4.09 3.166 7.801 6.027 11.15 8.478C400.9 172.5 426.6 191.7 448 208.5v46.32L303.2 367.5z"></path>
    </svg>
                                                        <View style={{
                                                                alignSelf: 'center', alignContent: 'center',
                                                                alignItems: 'center',
                                                        }}>
                                                                <TextInput
                                                                        style={styles.labelTextbox}
                                                                        placeholder="Username"
                                                                        keyboardType="default"
                                                                        onChangeText={(value) => this.setState({ username: value })}
                                                                />
                                                                <TextInput
                                                                        secureTextEntry={true}
                                                                        style={styles.labelTextbox}
                                                                        returnKeyType='go'
                                                                        autoCorrect={false}
                                                                        placeholder="Password"
                                                                        keyboardType="default"
                                                                        onChangeText={(value) => this.setState({ password: value })}
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
                                                                        onPress={() => this.making_api_call()}>
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

