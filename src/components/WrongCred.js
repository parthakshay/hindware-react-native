import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';  
  
const WrongCred = () => {
    showAlert1() {  
        Alert.alert(  
            'Alert Title',  
            'My Alert Msg',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );  
    }}  
export default WrongCred;