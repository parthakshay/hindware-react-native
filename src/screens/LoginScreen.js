import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, TextInput, ScrollView, Linking, Alert } from 'react-native';
import Style from '../components/Style';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create(Style)
const navigation = useNavigation();

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
                        Alert.alert(  
                                'Wrong Credentials!',  
                                'Please check the username and password for a smooth login!😉',  
                                [    
                                    {text: 'Dismiss', onPress: () => console.log('OK Pressed')},  
                                ]  
                            );
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
                                                        onPress={() => navigation.navigate("ResetPasswordScreen")}>
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


