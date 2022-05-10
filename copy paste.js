import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';



import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportScreen';
import SettingScreen from '../screens/SettingsScreen';
import NewEmpScreen from '../screens/NewEmpScreen';
import EmployeeScreen from '../screens/EmployeeScreen';
import TransactionFormScreen from '../screens/TransactionFormScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import PasswordOtpScreen from '../screens/PasswordOtpScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginStack = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, tabBarVisibility: false, tabBarVisible: false }}>
                        <Stack.Screen name="Login" component={LoginScreen} screenOptions={{tabBarVisible: false, tabBarLabel: false, tabBarVisibility: false}}/>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
                        <Stack.Screen name="PasswordOtp" component={PasswordOtpScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
}

const HomeStack = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, tabBarVisibility: false, tabBarVisible: false }}>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} screenOptions={{tabBarVisible: false, tabBarLabel: false, tabBarVisibility: false}}/>
                        <Stack.Screen name="NewEmp" component={NewEmpScreen} />
                        <Stack.Screen name="Employee" component={EmployeeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
};

function SettingsStack() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                        initialRouteName="Settings"
                        screenOptions={{
                                headerShown: false,
                        }}>
                        <Stack.Screen name="Settings" component={SettingScreen} />
                        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
                        <Stack.Screen name="PasswordOtp" component={PasswordOtpScreen} />
                </Stack.Navigator>
                </NavigationContainer>
        );
};
function TransactionStack() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                        initialRouteName="Report"
                        screenOptions={{
                                headerShown: false,
                        }}>
                        <Stack.Screen name="Report" component={ReportScreen} />
                        <Stack.Screen name="TransactionForm" component={TransactionFormScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
};




export default function RootNavigator() {
        return (

                        <Tab.Navigator
                                screenOptions={{
                                        activeTintColor: 'tomato',
                                        inactiveTintColor: 'gray',
                                }}>
                                <Tab.Screen name="LoginStack" component={LoginStack}
                                        options={{
                                                tabBarLabel: false, headerShown: false, tabBarLabel: '',
                                                tabBarIcon: ({ color, size }),
                                                tabBarActiveBackgroundColor: '#f3f3f3',
                                                tabBarHideOnKeyboard: true,
                                                tabBarVisible: false,
                                                tabBarVisibilityAnimationConfig:false,
                                                tabBarShowLabel: false,
                                        }} />
                                <Tab.Screen name="HomeStack" component={HomeStack}
                                        options={{
                                                tabBarLabel: false, headerShown: false, tabBarLabel: 'Home',
                                                tabBarIcon: ({ color, size }) => (<FontAwesome name="home" size={25} color="#444" />),
                                                tabBarActiveBackgroundColor: '#f3f3f3',
                                                tabBarHideOnKeyboard: true,
                                                tabBarShowLabel: false,
                                        }} />
                
                                <Tab.Screen name="Transactions"
                                        component={TransactionStack}
                                        options={{
                                                headerShown: false, tabBarLabel: 'Transactions Form', tabBarIcon: ({ color, size }) => (
                                                        <FontAwesome name="file-invoice-dollar" size={25} color="#444" />),
                                                tabBarActiveBackgroundColor: '#f3f3f3',
                                                tabBarHideOnKeyboard: true,
                                                tabBarShowLabel: false,
                                        }} />

                                <Tab.Screen name="SettingsStack" component={SettingsStack} options={{
                                        headerShown: false, tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => (
                                                <FontAwesome name="cog" size={25} color="#444" />),
                                        tabBarActiveBackgroundColor: '#f3f3f3', tabBarHideOnKeyboard: true,
                                        tabBarShowLabel: false,
                                }} />
                        </Tab.Navigator>
        );
}
