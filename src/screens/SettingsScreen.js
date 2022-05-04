import React from 'react';

import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView, } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import Style from '../components/Style';
const styles = StyleSheet.create(Style)

const SettingsScreen = ({ navigation }) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container} >
                    <View >
                        <Text style={styles.login}>Settings{'\n'}</Text>
                        <View style={{
                            alignSelf: 'center', marginTop: 40,
                        }}>
                            <Menu.Item icon="key" onPress={() => navigation.navigate('ResetPassword')} title="Change Password" />
                            <Divider/>
                            <Menu.Item icon="logout" onPress={() => navigation.navigate('Login')} title="Logout" />
                            <Divider />
                        </View>
                        <View>
                            <Pressable
                                style={styles.buttonStyle}
                                onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.buttonTextStyle}>Back</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default SettingsScreen;