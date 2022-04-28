import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportScreen';
import SettingScreen from '../screens/SettingsScreen';
import AccountScreen from '../screens/AccountScreen';
import DealerScreen from '../screens/DealerScreen';
import NewEmpScreen from '../screens/NewEmpScreen';
import EmployeeScreen from '../screens/EmployeeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginStack = () => {
        return (
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
        );
}

const HomeStack = () => {
        return (
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="NewEmp" component={NewEmpScreen} />
                        <Stack.Screen name="Employee" component={EmployeeScreen} />
                        <Stack.Screen name="Report" component={ReportScreen} />
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
                        <Stack.Screen name="Employee" component={EmployeeScreen} />
                        <Stack.Screen name="NewEmp" component={NewEmpScreen} />
                        <Stack.Screen name="Account" component={AccountScreen} />
                </Stack.Navigator>
        );
};
function TransactionStack() {
        return (
                <Stack.Navigator
                        initialRouteName="Dealer"
                        screenOptions={{
                                headerShown: false,
                        }}>
                        <Stack.Screen name="Report" component={ReportScreen} />
                        <Stack.Screen name="Dealer" component={DealerScreen} />
                        <Stack.Screen name="NewEmp" component={NewEmpScreen} />\
                        <Stack.Screen name="Employee" component={EmployeeScreen} />
                </Stack.Navigator>
        );
};




export default function RootNavigator() {
        return (
                <NavigationContainer>
                        <Tab.Navigator
                                tabBarOptions={{
                                        activeTintColor: 'tomato',
                                        inactiveTintColor: 'gray',
                                }}>
                                <Tab.Screen name="HomeStack" component={HomeStack}
                                        options={{
                                                tabBarLabel: false, headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<FontAwesome name="home" size={25} color="#444" />),
                                        }} />
                                <Tab.Screen name="Transactions"
                                        component={TransactionStack}
                                        options={{
                                                headerShown: false, tabBarLabel: 'Transactions', tabBarIcon: ({ color, size }) => (
                                                        <FontAwesome name="file-invoice-dollar" size={25} color="#444" />),
                                        }} />
                                <Tab.Screen name="SettingsStack" component={SettingsStack} options={{
                                        headerShown: false, tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => (
                                                <FontAwesome name="cog" size={25} color="#444" />),
                                }} />
                        </Tab.Navigator>
                </NavigationContainer>
        );
}
