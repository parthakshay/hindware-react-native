import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView, } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import Style from '../components/Style';
import HeadBar from '../components/HeadBar';
import colors from '../theme/colors';
const styles = StyleSheet.create(Style)

const SettingsScreen = ({ navigation }) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container} >
                <View><HeadBar /></View>
                        <View style={{
                            alignSelf: 'center', marginTop: 40,
                        }}>
                            <Menu.Item icon="key" onPress={() => navigation.navigate('ResetPassword')} title="Change Password" />
                            <Divider/>
                            <Menu.Item icon="logout" onPress={() => navigation.navigate('Login')} title="Logout" />
                            
                        </View>
                        <View>
                            <Pressable
                                style={styles.buttonStyle}
                                onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.buttonTextStyle}>Back</Text>
                            </Pressable>
                        </View>
                    </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default SettingsScreen;