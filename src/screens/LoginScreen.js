import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView, TextInput, Alert, ActivityIndicator } from 'react-native';
import Style from '../components/Style';
import TextBox from 'react-native-password-eye';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from "react-native-bouncy-checkbox";



const styles = StyleSheet.create(Style)

export default class LoginScreen extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        username: '',
                        password: '',
                        loading: false,
                        isChecked: false,
                        // usernameMessage: false,     // username flag to error message
                        // passwordMessage: false,     // password flag to password message
                        // loading: false,
                }
        }

        validate = async () => {

                if (this.state.username != '' && this.state.password != '' && this.state.isChecked) {
                        this.setState({ loading: true })
                        return true;
                }
                Alert.alert('Enter the Username, Password or Role')
                return false;
        }

        making_api_call = async () => {
                if (this.validate()) {
                        await axios.post('https://hindware-spring-boot.herokuapp.com/hindware/login/authenticate', this.state)

                                .then(response => {
                                        if (response) {
                                                this.setState({ loading: true, login: true })
                                                const response_data = JSON.stringify(response.data)
                                                const login = JSON.stringify(true)

                                                try {
                                                        AsyncStorage.setItem('@sih_info', response_data)
                                                        AsyncStorage.setItem('loggeIn', login)
                                                        this.props.navigation.navigate('Home')
                                                        this.setState({ loading: false })
                                                } catch (e) {
                                                        Alert.alert(e, 'Please try again, something went wrong')
                                                }
                                        } else {
                                                Alert.alert("Wrong credentials")
                                                this.setState({ loading: false })
                                        }

                                })

                } else {
                        console.log('error ')
                        Alert.alert("Invalid credentials")
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
                                                        <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                                                                <TextInput
                                                                        style={styles.labelUsername}
                                                                        placeholder="Username"
                                                                        keyboardType="default"
                                                                        value={this.state.username}
                                                                        onChangeText={username => this.setState({ username })}

                                                                // onChangeText={(value) => this.setState({ username: value })}
                                                                />

                                                        </View>


                                                        <View style={{ flexDirection: 'column', alignSelf: 'center', marginTop: 10 }}>
                                                                <TextInput
                                                        
                                                                        style={styles.labelTextbox}
                                                                        returnKeyType='go'
                                                                        autoCorrect={false}
                                                                        placeholder="Password"
                                                                        keyboardType="default"
                                                                        secureTextEntry={true}
                                                                        value={this.state.password}
                                                                        onChangeText={password => this.setState({ password })}
                                                                // onChangeText={(value) => this.setState({ password: value })}
                                                                />

                                                        </View>


                                                        <Text style={{
                                                                color: '#51a4ff',
                                                                fontSize: 15, fontWeight: '900', flex: 1, alignSelf: 'flex-end', top: 50, right: 15
                                                        }}
                                                                onPress={() => this.props.navigation.navigate('PasswordOtp')}>
                                                                Forgot password?
                                                        </Text>

                                                        <View style={{ flexDirection: 'column', marginTop: 50, alignSelf: 'center' }}>
                                                                
                                                                <BouncyCheckbox
                                                                        style={styles.checkbox}
                                                                        size={25}
                                                                        fillColor="gray"
                                                                        unfillColor="#FFFFFF"
                                                                        text="SIH"
                                                                        textStyle={{ fontWeight: 'bold' }}
                                                                        iconStyle={{ borderColor: "gray" }}
                                                                        onPress={() => {
                                                                                this.setState({ isChecked: true })
                                                                                AsyncStorage.setItem('loggedUser', 'SIH')
                                                                        }}

                                                                />
                                                                <BouncyCheckbox
                                                                        style={styles.checkbox}
                                                                        size={25}
                                                                        fillColor="gray"
                                                                        unfillColor="#FFFFFF"
                                                                        text="Zonal Manager"
                                                                        textStyle={{ fontWeight: 'bold' }}
                                                                        iconStyle={{ borderColor: "gray" }}
                                                                        onPress={() => {
                                                                                this.setState({ isChecked: true })
                                                                                AsyncStorage.setItem('loggedUser', 'Zonal Manager')
                                                                        }}

                                                                />

                                                                <BouncyCheckbox
                                                                        style={styles.checkbox}
                                                                        size={25}
                                                                        fillColor="gray"
                                                                        unfillColor="#FFFFFF"
                                                                        text="ASM"
                                                                        textStyle={{ fontWeight: 'bold' }}
                                                                        iconStyle={{ borderColor: "gray" }}
                                                                        onPress={() => {
                                                                                this.setState({ isChecked: true })
                                                                                AsyncStorage.setItem('loggedUser', 'ASM')
                                                                        }}
                                                                />
                                                                <BouncyCheckbox
                                                                        style={styles.checkbox}
                                                                        size={25}
                                                                        fillColor="gray"
                                                                        unfillColor="#FFFFFF"
                                                                        text="Sales Man"
                                                                        textStyle={{ fontWeight: 'bold' }}
                                                                        iconStyle={{ borderColor: "gray" }}
                                                                        onPress={() => {
                                                                                this.setState({ isChecked: true })
                                                                                AsyncStorage.setItem('loggedUser', 'Sales Man')
                                                                        }}

                                                                />

                                                        </View>
                                                        <View>
                                                                <Pressable
                                                                        style={styles.buttonStyle}
                                                                        onPress={() => this.making_api_call()}>
                                                                        <Text style={styles.buttonTextStyle}>Sign In</Text>
                                                                </Pressable>
                                                        </View>
                                                </View>

                                                <ActivityIndicator size="large" animating={this.state.loading} color="blue" />

                                        </View>
                                </ScrollView>
                        </SafeAreaView >

                );

        }

}


