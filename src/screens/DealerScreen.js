import * as React from 'react';
import { View, SafeAreaView, StatusBar, Pressable, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Card, } from 'react-native-paper';

const DealerScreen = ({ navigation }) => (
    <SafeAreaView>
        <ScrollView>
            <StatusBar backgroundColor="#61dafb" />
            <View style={{ marginTop: 50, }}>
                <Card>
                    <Avatar.Image size={96} source={require('../assets/images/1.jpg')} />
                    <Card.Title title="Card Title" subtitle="Card Subtitle" />
                </Card>
                <Card>
                    <Avatar.Image size={96} source={require('../assets/images/2.jpg')} />
                    <Card.Title title="Card Title" subtitle="Card Subtitle" />
                </Card>
                <Card>
                    <Avatar.Image size={96} source={require('../assets/images/3.jpg')} />
                    <Card.Title title="Card Title" subtitle="Card Subtitle" />
                </Card>
                <Card>
                    <Avatar.Image size={96} source={require('../assets/images/4.jpg')} />
                    <Card.Title title="Card Title" subtitle="Card Subtitle" />
                </Card>
                <Card>
                    <Avatar.Image size={96} source={require('../assets/images/5.jpg')} />
                    <Card.Title title="Card Title" subtitle="Card Subtitle" />
                </Card>
                <View>
                    <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonTextStyle}>To Home</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    buttonStyle: {
        height: 54,
        width: '80%',
        marginTop: 32,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ababab',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    buttonTextStyle: {
        color: '#f0ebee',
        fontWeight: '700',
    },
});

export default DealerScreen;