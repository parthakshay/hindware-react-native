import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Pressable, SafeAreaView } from 'react-native';
import {EmpDataTable} from '../components/EmpDataTable';
import {HeadBar} from '../components/FormHeader';
import Style from '../components/Style';
const styles = StyleSheet.create(Style)

const EmployeeData = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View><HeadBar/></View>
                

    <EmpDataTable/>

                    
                </View>

        </SafeAreaView >
    )
  }

export default EmployeeData;

