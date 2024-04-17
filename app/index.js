import { View, Text } from 'react-native';
import React from 'react';
import BackgroundImg from '../components/BackgroundImage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/login';
import Register from '../components/register';

const Stack = createNativeStackNavigator();

const Home = () => {
    return(
        <NavigationContainer independent={true} >
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='Home'>
                <Stack.Screen name="Home" component={BackgroundImg} />  
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};

export default Home;


