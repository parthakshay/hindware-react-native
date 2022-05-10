import * as React from 'react';
import { View, SafeAreaView, StatusBar, Pressable, StyleSheet, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Card, } from 'react-native-paper';
import { Row } from 'react-native-table-component';
import Style from '../components/Style';
import HeadBar from '../components/HeadBar';
import colors from '../theme/colors';
const styles = StyleSheet.create(Style)

const DealerScreen = ({ navigation }) => (
    <SafeAreaView>
        <ScrollView>
            <View style={{ marginTop: 50, }}>
                <View style={{ flexDirection:'row', padding:20}}>
                    <View>
                        <Image source={require("../assets/images/1.jpg")}
                        resizeMode="contain" style={{ borderRadius:10, height:50, width:50 }}></Image>
                    </View>
                    <View style={{paddingHorizontal:20}}>
                        <Text style={{ fontSize:25, fontWeight: 'bold' }}>Hi I'm Dealer</Text>
                        <Text style={{ fontSize:20}}>Hi This is dealer no 1</Text>
                    </View>
                </View>
                
                <View>
                    <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonTextStyle}>To Home</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
);



export default DealerScreen;