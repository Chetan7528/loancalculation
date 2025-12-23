import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '../utils/navigationRef';
import BottomTabBar from './TabNavigation';
import OnboardingScreen from '../screens/auth/BoardingScreen';
import LoanFinderScreen from '../screens/auth/LoanFinder';

const Stack = createNativeStackNavigator();




export default function Navigation(props) {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={props.initial}
            >
                <Stack.Screen name="Boarding" component={OnboardingScreen} />
                <Stack.Screen name="LoanFinderScreen" component={LoanFinderScreen} />
                <Stack.Screen name="MainTab" component={BottomTabBar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}