import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView, Alert } from 'react-native';
import Style from '../components/Style';
import TextBox from 'react-native-password-eye';
import axios from 'axios';
const styles = StyleSheet.create(Style)

export default class LoginScreen extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        username: '',
                        password: '',
                        usernameMessage: false,     // username flag to error message
                        passwordMessage: false,     // password flag to password message
                        loading: false,
                }
        }
        validate = async () => {
                this.setState({ loading: true })
                const { username, password } = this.state
                let errorFlag = false;
                if (username) {
                        errorFlag = true;
                        this.setState({ usernameMessage: false });

                } else {
                        errorFlag = false;
                        this.setState({ usernameMessage: true })
                }
                if (password) {
                        errorFlag = true;
                        this.setState({ passwordMessage: false });
                } else {
                        errorFlag = false;
                        this.setState({ passwordMessage: true })
                }
                if (errorFlag) {
                        console.log("errorFlag");

                        /** Call Your API */
                } else {
                        this.setState({ loading: false });
                }

                // if (username == this.state.username && password == this.state.password) {
                //         this.props.navigation.navigate('Home')
                //         return true
                // } else {
                //         Alert.alert(
                //                 'Wrong Credentials!',
                //                 'Please check the username and password for a smooth login.😉',
                //                 [
                //                         { text: 'Dismiss', onPress: () => console.log('') },
                //                 ]
                //         );
                // }
        }

        making_api_call = async (event) => {
                if (this.validate()) {
                        const response = await axios.post('https://hindware-spring-boot.herokuapp.com/estal/login/authenticate', this.state = (response) => {
                                console.log(response)
                        })
                        if (response.status === 201) {
                                alert(` success: ${JSON.stringify(response.data)}`);

                        } else {
                                throw new Error("An error has occurred");
                        }
                }
                this.props.navigation.navigate('Home')

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
                                                        <View style={{
                                                                alignSelf: 'center', alignContent: 'center',
                                                                alignItems: 'center',
                                                        }}>
                                                                <TextBox
                                                                        style={styles.labelTextbox}
                                                                        placeholder="Username"
                                                                        keyboardType="default"
                                                                        value={this.state.username}
                                                                        onChangeText={username => this.setState({ username })}

                                                                // onChangeText={(value) => this.setState({ username: value })}
                                                                />
                                                                {
                                                                        this.state.usernameMessage && <Text style={styles.textDanger}>{"* username is required"}</Text>
                                                                }

                                                                <TextBox
                                                                        secureTextEntry={true}
                                                                        style={styles.labelTextbox}
                                                                        returnKeyType='go'
                                                                        autoCorrect={false}
                                                                        placeholder="Password"
                                                                        keyboardType="default"
                                                                        value={this.state.password}
                                                                        onChangeText={password => this.setState({ password })}
                                                                // onChangeText={(value) => this.setState({ password: value })}
                                                                />
                                                                {
                                                                        this.state.passwordMessage && <Text style={styles.textDanger}>{"*Password is required"}</Text>
                                                                }
                                                        </View>
                                                        <Text style={{
                                                                color: '#51a4ff',
                                                                fontSize: 15, fontWeight: '900', flex: 1, alignSelf: 'flex-end', marginRight: 30
                                                        }}
                                                                onPress={() => this.props.navigation.navigate('ResetPassword')}>
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


