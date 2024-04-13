import { View, Text } from 'react-native';
import React from 'react';
import BackgroundImg from '../components/BackgroundImage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/login';

const Stack = createNativeStackNavigator();

const Home = () => {
    return(
        <NavigationContainer independent={true} >
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Home" component={BackgroundImg} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};

export default Home;
