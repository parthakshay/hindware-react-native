import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, TextInput, ScrollView, } from 'react-native';
import EmpDataTable from '../components/EmpDataTable';
import Style from '../components/Style';
import HeadBar from '../components/HeadBar';
import color from '../theme/colors';
const styles = StyleSheet.create(Style)


const ReportScreen = ({ route, navigation }) => {
        return (
                <SafeAreaView>
                        <ScrollView>
                                <View style={styles.container}>
                        <View><HeadBar/></View>
                                <View style={{height: 200, width:'100%',}}>
            <EmpDataTable/>
          </View>
                                        <View>
                                                <Pressable
                                                        style={styles.buttonStyle}
                                                        onPress={() => navigation.navigate('Transactions')}>
                                                        <Text style={styles.buttonTextStyle}>Submit</Text>
                                                </Pressable>
                                        </View>
                                </View>
                        </ScrollView>
                </SafeAreaView>

        );
}



export default ReportScreen;