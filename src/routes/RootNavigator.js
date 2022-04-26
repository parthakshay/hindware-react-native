import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportScreen';
import SettingScreen from '../screens/SettingsScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
        return (
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Report" component={ReportScreen} />
                        <Stack.Screen name="Account" component={AccountScreen} />
                        <Stack.Screen name="Settings" component={SettingScreen} />
                </Stack.Navigator>
        );
};

function SettingsStack() {
        return (
                <Stack.Navigator
                        initialRouteName="Settings"
                        screenOptions={{
                                headerShown: false,
                        }}>
                        <Stack.Screen name="Settings" component={SettingScreen} />
                        <Stack.Screen name="Account" component={AccountScreen} />
                </Stack.Navigator>
        );
};
function TransactionStack() {
        return (
                <Stack.Navigator
                        initialRouteName="Report"
                        screenOptions={{
                                headerShown: false,
                        }}>
                        <Stack.Screen name="Report" component={ReportScreen} />
                </Stack.Navigator>
        );
};




export default function RootNavigator() {
        return (
                <NavigationContainer>
                        <Tab.Navigator
                                initialRouteName="Feed"
                                screenOptions={{ headerShown: false, }}>
                                <Tab.Screen name="HomeStack" component={HomeStack} options={{
                                        headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<Icon name="home" size={25} color="#444" />),
                                }} />
                                <Tab.Screen name="Transactions"
                                        component={TransactionStack}
                                        option={{
                                                showIcon: true, tabBarLabel: 'Transactions', tabBarIcon: ({ color, size }) => (
                                                        <Ionicons name="logo-usd" size={25} color="#444" />),
                                        }} />
                                <Tab.Screen name="SettingsStack"
                                        component={SettingsStack}
                                        options={{
                                                tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => (
                                                        <Ionicons name="cog-usd" size={25} color="#444" />),
                                        }} />

                        </Tab.Navigator>
                </NavigationContainer>
        );
}
