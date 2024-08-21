import React, { Component } from 'react';

import { Text, TextInput, Pressable, Button, StyleSheet, View, KeyboardAvoidingView, Keyboard, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {

    // state ={
    //     data:[]
    // }

    // fetchData = async () => {
    //     const res = await fetch('http://localhost:4547/users');
    //     const users = await response.json();
    //     this.setState({data: users});
    // };

    // componentDidMount(this.fetchData());

    return(
        <KeyboardAvoidingView>
        
        <SafeAreaView>
        <Pressable onPress={Keyboard.dismiss}>
            <Pressable style={styles.loginBack}
                onPress={() =>
                    navigation.navigate('Home')
                }
            >
                <Image source={require('./images/back.png')}  style={styles.back}/>
            </Pressable>

            {/* data = {this.stat.data}
            renderItem={({item}) =>
                <Text style={styles.loginHeader}>{item.name}</Text>
            } */}

            

            <View style={styles.loginEmail}>
                <Text style={styles.loginEmailHead}>Email</Text>
                <TextInput 
                    style={styles.loginEmailInput}
                    placeholder="Email Address"
                />
            </View>

            <View style={styles.loginPassword}>
                <Text style={styles.loginEmailHead}>Password</Text>
                <TextInput 
                    secureTextEntry={true} 
                    style={styles.loginEmailInput}
                    placeholder="Enter Password"
                />
            </View>

            <Pressable style={styles.loginButton}
                onPress={() => navigation.navigate('GrmForm')}
            >
                <Text style={styles.loginButtonTxt}>LOG IN</Text>
            </Pressable>
            </Pressable>
        </SafeAreaView>
        
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    back: {
        top: 0,
        left: 0,
        width: 20,
        height: 20,
    },
    loginBack:{
        width: 20,
        height: 20,
        top: 50,
        left: 30,
        // backgroundColor: 'red',
    },
    loginHeader:{
        top: 80,
        left: 30,
        fontSize: 36,
        color: '#052600',
    },
    loginEmail:{
        top: 100,
        left: 30,
        // backgroundColor: 'red',
        width: 300,
        height: 60,
    },
    loginEmailHead:{
        top: 0,
        left: 0,
        fontSize: 15,
        color: '#052600',
    },
    loginEmailInput:{
        width: 300,
        height: 40,
        top: 0,
        left: 0,
        borderWidth: 2,
        borderColor: '#052600',
        textAlign: "justify",
    },
    loginPassword:{
        top: 120,
        left: 30,
        // backgroundColor: 'red',
        width: 300,
        height: 60,
    },
    loginButton:{
        top: 140,
        left: 30,
        backgroundColor: '#052600',
        width: 300,
        height: 40,
        borderRadius: 4,
    },
    loginButtonTxt:{
        textAlign: 'center',
        color: 'white',
        top: 10,
    }
});

