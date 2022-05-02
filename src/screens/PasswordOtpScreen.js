import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, TextInput, ScrollView, Linking } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'

export default class ResetPasswordScreen extends Component {
        render() {
                return (
                        <SafeAreaView>
                                <ScrollView>
                                        <View style={styles.container}>
                                                <View >
                                                     <View>
                                                     
                                                     </View>
                                                        <View style={{
                                                                alignSelf: 'center', alignContent: 'center',
                                                                alignItems: 'center',
                                                        }}>
                                                                <TextInput
                                                                        style={styles.labelTextbox}
                                                                    placeholder="Enter the OTP here..."
                                                                        keyboardType="numeric"
                                                                        autoCorrect="one-time-code"
                                                                        pattern="\d{6}"
                                                                />
</View>
                                                     <View>                                                  <Pressable
style={styles.buttonStyle}
onPress={() => NavigationPreloadManager.navigate('Home')}>
<Text style={styles.buttonTextStyle}>Submit</Text>
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

