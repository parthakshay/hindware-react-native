import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import colors from '../theme/colors';


import EmpDataTable from '../components/EmpDataTable';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportScreen';
import SettingScreen from '../screens/SettingsScreen';
import DealerScreen from '../screens/DealerScreen';
import NewEmpScreen from '../screens/NewEmpScreen';
import EmployeeScreen from '../screens/EmployeeScreen';
import TransactionFormScreen from '../screens/TransactionFormScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import PasswordOtpScreen from '../screens/PasswordOtpScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginStack = () => {
        return (
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, tabBarVisibility: false, tabBarVisible: false, tabBarStyle: {
                        display: "none",
                      },
                      tabBarButton: () => null, }}>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
                        <Stack.Screen name="PasswordOtp" component={PasswordOtpScreen} />
                        <Stack.Screen name="NewEmp" component={NewEmpScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Report" component={ReportScreen} />
                        <Stack.Screen name="Transactions" component={TransactionFormScreen} />
                        <Stack.Screen name="Employee" component={EmployeeScreen} />
                        <Stack.Screen name="EmpData" component={EmpDataTable} />
                        <Stack.Screen name="Settings" component={SettingScreen} />
                </Stack.Navigator>
        );
}

const HomeStack = () => {
        return (
                <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, }}>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="NewEmp" component={NewEmpScreen} />
                        <Stack.Screen name="Employee" component={EmployeeScreen} />
                        <Stack.Screen name="EmpData" component={EmpDataTable} />
                        <Stack.Screen name="PasswordOtp" component={PasswordOtpScreen} />
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
                        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
                        <Stack.Screen name="PasswordOtp" component={PasswordOtpScreen} />
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
                        <Stack.Screen name="Transactions" component={TransactionFormScreen} />
                </Stack.Navigator>
        );
};




export default function RootNavigator() {
        return (
                <NavigationContainer>
                        <Tab.Navigator
                                screenOptions={{
                                        activeTintColor: 'tomato',
                                        inactiveTintColor: '#a1a1a1',
                                }}>
                                <Tab.Screen name="LoginStack" component={LoginStack}
                                        options={{
                                                tabBarLabel: false, headerShown: false, tabBarLabel: 'Login',
                                                tabBarIcon: ({ color, size }) => (<FontAwesome name="key" size={25} color="#444" />),
                                                tabBarActiveBackgroundColor: '#fefefe',
                                                tabBarHideOnKeyboard: true,
                                                tabBarShowLabel: false,
                                                tabBarStyle: {
                                                        display: "none",
                                                      },
                                                tabBarButton: () => null,
                                        }}
                                        />
                                <Tab.Screen name="HomeStack" component={HomeStack}
                                        options={{
                                                tabBarLabel: false, headerShown: false, tabBarLabel: 'Home',
                                                tabBarIcon: ({ color, size }) => (<FontAwesome name="home" size={25} color="#444" />),
                                                tabBarActiveBackgroundColor: '#fefefe',
                                                tabBarHideOnKeyboard: true,
                                                tabBarShowLabel: false,
                                                tabBarStyle: {
                                                        display: "none",
                                                      },
                                                tabBarButton: () => null,
                                        }} />

                                

                                <Tab.Screen name="SettingsStack" component={SettingsStack} options={{
                                        headerShown: false, tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => (
                                                <FontAwesome name="cog" size={25} color="#444" />),
                                        tabBarActiveBackgroundColor: '#fefefe', tabBarHideOnKeyboard: true,
                                        tabBarShowLabel: false,
                                        tabBarStyle: {
                                                display: "none",
                                              },
                                        tabBarButton: () => null,
                                }} />
                        </Tab.Navigator>
                </NavigationContainer>
        );
}
