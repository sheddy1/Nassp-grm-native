import { View, Text } from 'react-native';
import React from 'react';
import BackgroundImg from '../components/BackgroundImage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/login';
import Register from '../components/register';
import GrmForm from '../components/grmForm';
import GrievanceRegister from '../components/grievanceRegister';
import NsrRegister from '../components/nsrRegister';

const Stack = createNativeStackNavigator();

const Home = () => {
    return(
        <NavigationContainer independent={true} >
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='BackgroundImg'>
                <Stack.Screen name="Home" component={BackgroundImg} />  
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="GrmForm" component={GrmForm} />
                <Stack.Screen name="GrievanceRegister" component={GrievanceRegister} />
                <Stack.Screen name="NsrRegister" component={NsrRegister} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};

export default Home;


